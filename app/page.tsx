"use client"

import CardsContainer from "@/components/cards";
import CuisineCategories from "@/components/cuisines";
import Map from "@/components/map";
import Radius from "@/components/radius";
import FoodTypes from "@/components/types";
import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {

  const [ userLocation, setUserLocation ] = useState({lat: null, lng: null})
  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      })
    }
    getUserLocation()
  }, [])

  const [ data, setData ] = useState(null)
  const [ category, setCategory ] = useState("Italian Restaurant")
  const [ radius, setRadius ] = useState(2500)
  const api = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  useEffect(() => {
    const fetchData = async (category: string, radius: number, lat: number, lng: number) => {
      try {
        const response = await axios.get(`/api/places?query=${category}&location=${lat},${lng}&radius=${radius}&key=${api}`)
        setData(response.data)
      } catch(err) {
        console.error("Error making a fetch request:" + err)
      }
    }
    fetchData(category, radius, userLocation.lat, userLocation.lng)
  }, [userLocation.lat, userLocation.lng, category, radius, api])

  return (
    <>
    <div className="flex flex-col md:flex-row justify-between m-4">
    <div className="flex flex-col">
      {/* <div className="flex gap-2 px-2 mx-8">
        <input type="text" placeholder="Search food places..." className="outline-none bg-transparent font-normal" />
        <button onClick={(e) => setCategory((e.target as HTMLButtonElement).value)} className="rounded-[4px] p-2 my-2 hover:bg-slate-100 cursor-pointer"><Search size={16} strokeWidth={1.5}/></button>
      </div> */}
      <CuisineCategories onSelect={setCategory} />
      <FoodTypes onSelect={setCategory} />
      <Radius onSelect={setRadius} />
    </div>
    <div>
      <Map userLocation={userLocation} data={data} />
      <CardsContainer data={data} userLocation={userLocation} />
    </div>
    </div>
    </>
  )
}