  "use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {

    const[header, setHeader] = useState(false);


    const scrollHeader = () => {
        if(window.scrollY >= 20) {
            setHeader(true);
        }else {
            setHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)

        return () => {
            window.addEventListener('scroll', scrollHeader)
        }
    })
    return (
        
        <div className={header ? "fixed w-[100%] text-white h-24 flex items-center justify-between gap-8 px-4 md:px-8 lg:px-16 xl:px-20 bg-gray-400 z-10":"bg-black h-28 text-white flex items-center justify-between gap-8 px-4 md:px-8 lg:px-16 xl:px-20"}>
            {/* logo */}
            <div className="flex-none">
            <h1 className=" text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">FUBU</h1>
            </div>
            {/* navlinks */}
            <div className="hidden lg:flex flex-intial gap-8 items-center px-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/orphanages">Local Orphanages</Link>
                <Link href="/international">International Ngos</Link>


            </div>

            <div className="lg:hidden">
                <Menu />
            </div>

            {/* rightlink */}
            <div className="hidden flex-intial lg:flex gap-4 items-center justify-end">
            <Link href="/orphanages">Donate</Link>
            <Link href="/">Contact Us</Link>
            </div>
        </div>

    )
}

export default Navbar;