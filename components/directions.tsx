"use client"

import RestaurantCard from "./card"

export default function Distance({data, userLocation}) {
    return (
        <>
        {data ? (
            data.results.map((item, index) => (
                <RestaurantCard key={index} item={item} userLocation={userLocation}/>
            ))
        ) : null}
        </>
    )
}