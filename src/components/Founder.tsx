import Image from "next/image";
import React from "react";


const Founder = () => {
    return (
        <div className="flex flex-col gap-4 p-4 items-center justify-center md:flex-row">
            <div className="flex-1 flex items-center justify-center">
                <Image src="/fol.jpeg" alt="" width={300} height={250} className="rounded-full" />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-4 items-center justify-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pt-8">Founder&apos;s  Statement</h1>
                <p>There are hundreds of privately owned orphanages, charity organizations, and international nongovernmental 
                    organizations in Ethiopia, all housing, supporting, and tackling to reduce and prevent orphan children
                     from being on the streets. Since the 1970s famine in Ethiopia, many international-based NGOs such as 
                     World Vision, Compassion International, Save the Children, and Path International have been interested in this particular matter. 
                     They have made it their mission to work on the lives of orphans.  In recent decades, numerous local private orphanages have emerged
                      and have successfully reduced orphan numbers and homeless youth prevention.

            </p>
            <br/>
            <p>
            However, there is a major disconnection between community-based, local nonprofit organizations working with 
                      orphaned children and youth and the funders, sponsors, donors, or potential donors and sponsors. Many 
                      abroad Ethiopians and non-Ethiopians with the passion and heart for orphans wanting to help and donate 
                      to a good cause are often held back due to previous negative experiences or lack of trust, infrastructural
                       issues, and underdeveloped virtual platforms–causing orphanages to miss out on the opportunity to have the 
                       capability and funding to successfully serve. As a result, orphanages in Ethiopia are often overcrowded and
                        underfunded, making it difficult for them to provide adequate care and support for the children living there.
                         Many of these children are forced to live in unsanitary and unhealthy conditions and often lack access to
                          necessities such as food, clothing, and education. Additionally, the restrictions placed by the Ethiopian government 
                          on international adoption have caused foreign sponsors and donors–to create a significant gap in local orphanages’ funding and resource access.
            </p>
            </div>
        </div>
    )
}

export default Founder