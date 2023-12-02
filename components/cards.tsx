"use client"

import Distance from "./directions";
import Skeleton from "./skeleton";

export default function CardsContainer({data, userLocation}) {
    return (
        <>
        <div className="scrollbar flex w-[430px] md:w-[980px] overflow-auto scroll-smooth overscroll-none items-center gap-3 absolute bottom-[-60%] md:bottom-[2%] left-[7%] md:left-[28%]">
            {data ? (
                <Distance data={data} userLocation={userLocation} />
            ): (
                Array.from({length: 4}).map((_, index) => (
                    <Skeleton key={index} />
                ))
            )}
        </div>
        </>
    )
}