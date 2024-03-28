import Image from "next/image";
import React from "react";

const teams = [
    {
        id: 1,
        name: "Lidya Kinfe",
        title: "General Manager",
        img: "/fol.jpeg",
    },
    {
        id: 2,
        name: "Lidya Kinfe",
        title: "International Coordinator",
        img: "/chlogo.jpg",
    },
    {
        id: 3,
        name: "Lidya Kinfe",
        title: "Local Cordinator",
        img: "/chlogo.jpg",
    },
    {
        id: 4,
        name: "Lidya Kinfe",
        title: "Public Relation",
        img: "/code.jpeg",
    },
    {
        id: 5,
        name: "Lidya Kinfe",
        title: "Marketing",
        img: "/code.jpeg",
    },
    {
        id: 6,
        name: "Lidya Kinfe",
        title: "Program Manager",
        img: "/code.jpeg",
    },
]

const Team = () => {
    return(
        <div className="">
            <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-8">Meet Our Team</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 content-center ">
                {teams.map((team) => (
                    <div  key={team.id} className="flex flex-col items-center justify-center gap-4 p-4 " >
                    <Image src={team.img} alt="" width={300} height={250} />
                    <h2 className="font-bold text-2xl">{team.name}</h2>
                    <h3>{team.title}</h3>
                    
                </div>
                ))}
                
            </div>

        </div>
    )
}


export default Team