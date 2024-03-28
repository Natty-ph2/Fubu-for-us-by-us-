import React from "react";

import { TbHttpConnect } from "react-icons/tb";
import { SiConsul } from "react-icons/si";
import { GrWorkshop } from "react-icons/gr";

const Services = () => {
    return (
        <div className="h-[100vh] mb-4">
            <h1 className="flex items-center justify-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4 md:py-8 lg:py-12" >Our Services</h1>
            <div className=" flex flex-col gap-3 items-center justify-center md:flex-row md:gap-8 text-center p-3 md:p-10 lg:p-20">
                <div className="flex-1 flex flex-col gap-4 items-center justify-center md:mb-4  ">
                    <TbHttpConnect size={100} />
                    <h1 className="font-bold md:text-2xl lg:text-3xl xl:text-4xl p-4 md:p-10 xl:p-20 ">Connecting</h1>
                    <p className="text-center">Connecting local and international communities to effectively support and improve the lives of orphaned and displaced children 
                        in Ethiopia through a comprehensive and transparent virtual information hub
                    </p>
                </div>

                <div className="flex-1 flex flex-col gap-4 items-center justify-center md:mb-4">
                    <SiConsul size={100}/>
                    <h1 className="font-bold md:text-2xl lg:text-3xl xl:text-4xl p-4 md:p-10 xl:p-20 ">Consulting</h1>
                    <p className="text-center">Consulting with local orphanages to address issues pertaining to orphans, and enhancing their organizational capacity to effectively address these challenges.</p>
                </div>

                <div className="flex-1 flex flex-col gap-4 items-center justify-center md:mb-4">
                    <GrWorkshop size={100} />
                    <h1 className="font-bold md:text-2xl lg:text-3xl xl:text-4xl p-4 md:p-10 xl:p-20  ">Training and Workshops</h1>
                    <p className="text-center">We provide training and workshops for various orphanages and their teams to ensure that orphaned children have access to the love and support they need to thrive. 
                   </p>
                </div>
            </div>
        </div>
    )
}


export default Services;