import Image from "next/image";
import React from "react";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {
    return (
        <div className="bg-gray-700 h-[100vh] flex flex-col md:flex-row w-screen mt-4">
            {/* text container */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6 md:p-20">
                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold">Let&apos;s  do something great together!</h1>
                <p className="text-white">Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you. Feel free to reach out to us!</p>

                <div className="flex flex-col items-start">
                  <h1 className=" text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">FUBU</h1>
                   <div className=" hidden text-white md:flex flex-col gap-3 items-start px-4 justify-center">
                    <span className="flex gap-2"><CiPhone />+251928747043</span>
                    <span className="flex gap-2"><CiLocationOn />Coramdeo Plaza (On the road from Dembel to bole Airport) Addis Ababa</span>
                  </div>
                </div>
                
               
            </div>
            {/* formContainer */}
            <div className="flex-1 text-white  flex flex-col gap-8 items-start p-6 justify-center ">
                <form className="flex flex-col gap-6 items-start justify-between md:gap-8 lg:gap-14 xl:gap-16 ">
                          <div className="md:flex gap-4">
                                <div className="flex flex-col">
                                    <label className="">First Name</label>
                                    <input className="p-2 rounded-md" type="text" name="name" />
                                </div>

                                  <div className="flex flex-col">
                                    <label>Last Name</label>
                                    <input className="p-2 rounded-md" type="text" name="name" />
                                </div>
                         </div>
                         <div className="flex flex-col">
                            <label>Email</label>
                            <input className="p-2 rounded-md" type="text" name="email" placeholder="Email"/>
                         </div>
                        
                        <div className="flex flex-col">
                            <label>Your Message</label>
                            <input className="p-4 rounded-md md:pr-12" type="area" name="message" />
                        </div>
                     <button className=" border-2 border-gray-400 px-2 rounded-md hover:bg-gray-600">Get in touch</button>
                </form>
                <div className="text-white flex flex-col gap-2 items-start px-4 justify-center md:hidden">
                    <span className="flex gap-2"><CiPhone />+1 206 446 5620</span>
                    <span className="flex gap-2"><CiLocationOn />Coramdeo Plaza</span>
                  </div>
            </div>
        </div>
    )
}


export default Contact;