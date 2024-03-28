"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },

    {
        id: 2,
        title: "About Us",
        url: "/about"
    },

    {
        id: 3,
        title: "Services",
        url: "/services"
    },

    {
        id: 4,
        title: "Local Orphanages",
        url: "/orphanages"
    },

    {
        id: 5,
        title: "International Ngos",
        url: "/international"
    },
]
const Menu = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            

            {!open ? (
                <FaBars width={20} height={20} className="cursor-pointer" onClick={() => setOpen(true)} />
            ) : (
                <IoMdClose width={20} height={20} className="cursor-pointer" onClick={() => setOpen(false)} />
            )}

        {open && (
                <div className="absolute left-0 top-28 h-[calc(100vh-6rem)] bg-black flex flex-col gap-8 items-center pt-10 w-full z-10">
                    {links.map((link) => (
                    
                        <Link className="cursor-pointer py-8" key={link.id} onClick={() => setOpen(false)} href={link.url}>{link.title}</Link>
                    
                    ))}
   
           </div>
            )
        }
       </div>
    )
}

export default Menu;