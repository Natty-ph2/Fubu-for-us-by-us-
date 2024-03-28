"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const data = [
    {
        id:1,
        title: "Over 140 Millions Orphans in the World",
        img: "/orphch1.jpg"
    },
    {
        id:2,
        title: "Ethiopia is parttaker of over 4.5 millions of orphaned children",
        img: "/orph2.jpg"
    },
    {
        id:3,
        title: "lets join one stop shop",
        img: "/orph3.jpg"
    },
    {
        id:4,
        title: "Help the orphaned childeren to get them basic needs",
        img: "/orph4.jpg"
    },
]


const Slider = () => {

    const[currentSlider, setCurrentSlider] = useState(0);

 

    // useEffect(() => {
    //     const interval = setInterval(
    //         () => setCurrentSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
    //         5000
    //     );
    //     return () => clearInterval(interval);
    // }, []);
    





    return(
        <div className="h-[calc(100vh-6rem)] p-4  w-screen flex flex-col gap-4 md:gap-8 justify-center items-center  md:flex-row md:h-[calc(100vh-6rem)] md:p-10 xl:p-20 bg-black  ">
            <div className="flex-1 flex flex-col p-4 items-center justify-center text-center">
            <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl gap-4 font-bold text-gray-100 mb-4">{data[currentSlider].title}</h1>
            <Link href="/about" className="border-2 border-gray-100 px-4 py-2 rounded-md font-bold text-white md:text-1xl" >More About Us</Link>
            </div>
            <div className=" w-full flex-1 h-[calc(100vh-9rem)] relative ">
            <Image src={data[currentSlider].img} alt="wts up" fill className="object-contain  rounded-lg  " />
            </div>
          
        </div>
    )
}

export default Slider;