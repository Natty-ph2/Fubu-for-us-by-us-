import Link from "next/link";
import React from "react";


const About = () => {
    return (
        
        <div className="">
             <h1 className="flex items-center justify-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4 md:py-16" >About Us</h1>
                <div className=" h-[90vh] flex flex-col items-center justify-center gap-4 md:flex-row p-4">
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">FUBU</h1>
                        <p className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin">For us by us</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-4 items-center justify-between p-4">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-4">Virtual Information Hub </h1>
                        <p>The goal of this information hub is to mobilize resources and support, connect local and international 
                            sponsors and donors with both private and public orphanages and community-based organizations working 
                            to reduce or prevent children from becoming orphaned, displaced, and homeless children and youths; and
                            amplify donors and recipients organization, and governmental interactions in this vital issue.
                        </p>
                        <Link href="/about" className="border-2 border-gray-100 px-4  font-bold rounded-md">More</Link>
                    </div>
                </div>
        </div>

    )
}
export default About;