"use client"

import { useState } from "react"

export default function Radius({onSelect}) {
    const [ radius, setRadius ] = useState(2.5)
    return (
        <>
        <div>
        <h1 className="my-2 font-bold text-xl">Radius</h1>
        <div className="flex flex-col">
            <input onChange={(e) => {onSelect(Number(e.target.value) * 1000); setRadius(Number(e.target.value))}} type="range" min={1} step={.5} max={10} defaultValue={radius} className="w-full appearance-none bg-[#B9CDF0] rounded-full h-[8px] border border-black"/>
            <span>{radius}km</span>
        </div>
        </div>
        </>
    )
}