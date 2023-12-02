"use client"
import Image from "next/image"
import { ListOfCuisines } from "../data/categories"

export default function CuisineCategories({onSelect}) {
    return (
        <>
        <h1 className="my-2 font-bold text-xl">Cuisine</h1>
        <div className="grid grid-cols-4 md:grid-cols-3 gap-[8px] w-fit">
            {ListOfCuisines.map((item, index) => (
                <div onClick={() => onSelect(item.value)} key={index} className="flex flex-col items-center justify-center p-2 border border-black gap-1 w-[100px] h-[100px] rounded-[4px] hover:shadow-md transition-all cursor-pointer">
                    <Image src={item.icon} alt={item.name} width={48} height={48} />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
        </>
    )
}