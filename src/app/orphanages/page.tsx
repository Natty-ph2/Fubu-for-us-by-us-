import Image from "next/image";
import React from "react";
import Link from "next/link";

const orphanagesLists = [
    {
        id: 1,
        img: "/httfh.png",
        name: "Hope For The Fatherless",
        desc: "Hope for the Fatherless (HFTF) serves orphaned & vulnerable children in Ethiopia & places them into loving families through reunification, kinship placement, domestic adoption & small group homes. Founded in 2016 by Belay T. Gebru."
    },

    {
        id: 2,
        img: "/bethany.png",
        name: "Bethany in Ethiopia",
        desc: "Bethany is a global nonprofit—in more than 30 states and more than a dozen countries—dedicated to helping families thrive. At Bethany, we go to the ends of the earth to ensure families are loved, connected, and safe."
    },

    {
        id: 3,
        img: "/debo.jpeg",
        name: "Debo Aliance",
        desc: "DEBO (Defend Every Beloved Orphan) is an effort to create a collaboration among local and international organizations to better serve the orphan and vulnerable children of Ethiopia and curb the escalating problem."
    },

    {
        id: 4,
        img: "/hope.png",
        name: "A Hope Ethiopia",
        desc: "Hope for Children in Ethiopia (HCE) was started in 2001 by a group of 10 teenage boys. This unique group of friends began to understand the large problem of homelessness in Ethiopia’s capital city of Addis Ababa."
    },

    {
        id: 5,
        img: "/mf.png",
        name: "MY FATHERS HOUSE",
        desc: "My Father's House (MFH) is a NGO with specific objectives to  help alleviate the suffering of orphaned and destitute children in Nazreth, Ethiopia."
    },

    {
        id: 6,
        img: "/my.png",
        name: "MAKE YOUR MARK INTERNATIONAL",
        desc: "Make Your Mark is reaching out to these vulnerable children and creating safe environments of love, encouragement, training, discipleship and life rehabilitation in order to tap into the great potential that is inside of each child."
    },

    {
        id: 7,
        img: "/httfh.png",
        name: "Hope For The Fatherless",
        desc: "Hope for the Fatherless (HFTF) serves orphaned & vulnerable children in Ethiopia & places them into loving families through reunification, kinship placement, domestic adoption & small group homes. Founded in 2016 by Belay T. Gebru."
    },

    {
        id: 8,
        img: "/bethany.png",
        name: "Bethany in Ethiopia",
        desc: "Bethany is a global nonprofit—in more than 30 states and more than a dozen countries—dedicated to helping families thrive. At Bethany, we go to the ends of the earth to ensure families are loved, connected, and safe."
    },

    {
        id: 9,
        img: "/debo.jpeg",
        name: "Debo Aliance",
        desc: "DEBO (Defend Every Beloved Orphan) is an effort to create a collaboration among local and international organizations to better serve the orphan and vulnerable children of Ethiopia and curb the escalating problem."
    },

    {
        id: 10,
        img: "/hope.png",
        name: "A Hope Ethiopia",
        desc: "Hope for Children in Ethiopia (HCE) was started in 2001 by a group of 10 teenage boys. This unique group of friends began to understand the large problem of homelessness in Ethiopia’s capital city of Addis Ababa."
    },

    {
        id: 11,
        img: "/mf.png",
        name: "MY FATHERS HOUSE",
        desc: "My Father's House (MFH) is a NGO with specific objectives to  help alleviate the suffering of orphaned and destitute children in Nazreth, Ethiopia."
    },

    {
        id: 12,
        img: "/my.png",
        name: "MAKE YOUR MARK INTERNATIONAL",
        desc: "Make Your Mark is reaching out to these vulnerable children and creating safe environments of love, encouragement, training, discipleship and life rehabilitation in order to tap into the great potential that is inside of each child."
    },

]

const LocalOrphanages = () => {
    return (
        <div className="">
            <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-8">Lets Connect</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 content-center ">
                {orphanagesLists.map((orphanage) => (
                    <div key={orphanage.id} className="flex flex-col items-center justify-center gap-4 p-4 ">
                        <Image src={orphanage.img} alt="" width={300} height={250} />
                        <h1 className="font-bold md:text-2xl lg:text-3xl ">{orphanage.name}</h1>
                        <p>{orphanage.desc}</p>
                        <div className="flex items-center justify-between gap-4">
                            <Link href="/orphanages" className="font-bold px-2 border-2 border-gray-400 rounded-md">Donate</Link> 
                            <Link href="/orphanages" className="font-bold px-2 border-2 border-gray-400 rounded-md">Volunter</Link> 
                            <Link href="/orphanages" className="font-bold px-2 border-2 border-gray-400 rounded-md">Internship</Link> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LocalOrphanages