"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter()
    return (
        <>
        <div className="flex justify-between py-2 px-4 items-center border-b border-black">
            <Image onClick={() => router.push("/")} src="/Logo.svg" alt="Logo" width={100} height={41} className="cursor-pointer"/>
            <div className="flex gap-4 items-center font-medium">
                <Link href="/favorites" className="border-b-2 border-white hover:border-b-2 hover:border-black transition-all">Favorites</Link>
                <Link href="/about" className="border-b-2 border-white hover:border-b-2 hover:border-black transition-all">About</Link>
            </div>
        </div>
        </>
    )
}