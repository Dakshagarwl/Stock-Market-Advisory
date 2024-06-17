import React from 'react'

import angelone from "../../public/angelone.png"
import cams from "../../public/cams.png"
import happiestminds from "../../public/happiestminds.png"
import iex from "../../public/iex.png"
import motherson from "../../public/motherson.png"
import polycab from "../../public/polycab.png"
import zomato from "../../public/zomato.png"

import MiniMap from './MiniMap'



function Wealth() {
    const cardItem=[
        {
            id:1,
            logo:angelone,
            name:"Angelone"
        },
        {
            id:2,
            logo:cams,
            name:"CAMS"
        },
        {
            id:3,
            logo:happiestminds,
            name:"Happiestmind"
        },
        {
            id:4,
            logo:iex,
            name:"IEX"
        },
        {
            id:5,
            logo:motherson,
            name:"Motherson"
        },
        {
            id:6,
            logo:polycab,
            name:"Polycab"
        },
        {
            id:7,
            logo:zomato,
            name:"Zomato"
        },
        
    ]
  return (
    <div name="Wealth" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 ">
      <div>
        <h1 className="text-3xl font-bold mb-5 ">Wealth</h1>
        <p className="">These are the top picks which are mainly mid-caps but have multibagger potential.These stocks are very well researched and have great potential in future. For better U.S. Dollar - India Rupee Chart
            <MiniMap />
             </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {
                cardItem.map(({id,logo,name  })=>(
                    <div className="flex flex-col items-center justify-center  border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                        <img src={logo} className="w-[150px] rounded-full "alt="" />
                        <div>
                            <div className="">{name}</div>
                            

                        </div>
                        

                    </div>
                )
            )
            }
        </div>
      </div>
    </div>
  )
}

export default Wealth
