import React from 'react'

import tatapower from "../../public/tatapower.png"
import cdsl from "../../public/cdsl.png"
import astral from "../../public/astral.png"
import icici from "../../public/icici.png"
import asianpaint from "../../public/asianpaint.png"

import News from './News'


function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:tatapower,
            name:"Tatapower"
        },
        {
            id:2,
            logo:cdsl,
            name:"CDSL"
        },
        {
            id:3,
            logo:astral,
            name:"Astral "
        },
        {
            id:4,
            logo:icici,
            name:"ICICI Bank"
        },
        {
            id:5,
            logo:asianpaint,
            name:"Asian Paints"
        },
        
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 ">
      <div>
        <h1 className="text-3xl font-bold mb-5 ">Portfolio</h1>
        <span className="underline font-semibold">Latest news related to markets.</span>
        <div>
            <News />
        </div>
        
        <div>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {
                cardItem.map(({id,logo,name  })=>(
                    <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                        <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"alt="" />
                        <div>
                            <div className="px-2 font-bold text-xl mb-2 ">{name}</div>
                            <p className="px-2 text-gray-700 ">Top Picks of this month. Buy on every dips.Long Term portfolio stocks. Low Risk High Return</p>

                        </div>
                        <div className=" px-6 py-4 space-x-3 justify-around">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded ">BUY</button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded ">SELL</button>
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

export default Portfolio
