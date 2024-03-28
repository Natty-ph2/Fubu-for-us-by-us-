import React from "react";
import Link from "next/link";
import Founder from "@/components/Founder";
import Team from "@/components/Team";


const AboutPage = () => {
    return(
        <>
        <div className="h-[calc(100vh-6rem)]">
        <h1 className="flex items-center justify-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-2 md:py-16" >Who We Are</h1>
           <div className=" h-[90vh] flex flex-col items-center justify-center gap-2 md:flex-row p-2">
               <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                   <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">FUBU</h1>
                   <p className="uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin">For us by us</p>
               </div>

               <div className="flex-1 flex flex-col gap-4 items-center justify-between p-2">
                <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-4">Virtual Information Hub </h1>
                        <p>The goal of this information hub is to mobilize resources and support, connect local and international 
                            sponsors and donors with both private and public orphanages and community-based organizations working 
                            to reduce or prevent children from becoming orphaned, displaced, and homeless children and youths; and
                            amplify donors and recipients organization, and governmental interactions in this vital issue.
                        </p>
                </div>   
                 <div className="hidden lg:flex flex-col items-center justify-center">
                    <h1 className="font-bold  md:text-2xl lg:text-3xl xl:text-4xl p-2">Our Vision</h1>
                    <p>Our vision is to create a world where every orphaned child has access to the love and support they need to thrive.
                    </p>
                 </div>
                 
                 <div className="hidden lg:flex flex-col items-center justify-center">
                    <h1 className="font-bold  md:text-2xl lg:text-3xl xl:text-4xl p-2">Our Mission</h1>
                    <p className="mb-8 lg:mb-12">Our mission is to empower and connect local and international communities to effectively support and improve the lives of orphaned and displaced
                        children in Ethiopia through a comprehensive and transparent virtual information hub. We strive to bridge the gap between sponsors, donors, and 
                        organizations working towards the prevention and reduction of orphaned and homeless children in Ethiopia, while amplifying their efforts and 
                        impact through increased resources and collaboration.
                        </p>
                 </div>
                  
                   
               </div>


              
           </div>

           
   </div>
   <Founder />
   <Team />
   </>
    )
}

export default AboutPage