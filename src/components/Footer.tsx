import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {

    return(
        <>
        <div className="h-32 p-4 flex gap-6 items-center justify-between lg:p-20 xl:p-40">
            {/* logoImage */}
            <div>
            <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">FUBU</h1>
            </div>

            {/* Company */}
            <div className="hidden md:flex flex-col gap-4">
               <h2 className="text-2xl font-bold text-gray-700">Company</h2>
               <Link href="/services">Services</Link>
               <Link href="/about">About Us</Link>
               <Link href="/orphanages">Local Orphanages</Link>
               <Link href="/international">International Ngos</Link>
            </div>

            <div className="hidden md:flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-700">Services</h2>
                <Link href="/services">Connecting</Link>
                <Link href="/services">Consulting</Link>
               <Link href="/services">Training and workshops</Link>   
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-gray-700">Contact Info</h3>
                <p>Tel: +1 206 446 5620</p>
                <p>Email: lidiyakinfe97@gmail.com </p>
           </div>
 
           <div className="flex gap-4">
              <FaLinkedin />
              <FaGithub />
           </div>

          
        </div>
        <p className="text-center pt-6">@Thrive Software Technologies </p>
        </>
    )
}

export default Footer