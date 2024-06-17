import React from 'react'

import pic from '../../public/bull.jpg'


import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { AiOutlineStock } from "react-icons/ai";
import { RiStockFill } from "react-icons/ri";
import { RiStockLine } from "react-icons/ri";

import { ReactTyped } from "react-typed";

import StockIndex from './StockIndex';




function Home(){
    return(
        <>
        <div 
        name="Home"
        className= "max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
           <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Let's Talk Markets</span>
             <div className="flex space-x-1 text-2xl md:text-4xl">
                <h1>Get Knowledge of</h1>
              {/*  <span className="text-red-700 font-bold">Developer</span>*/}
              <ReactTyped
              className="text-red-700 font-bold"
          strings={["Stocks","Investing","Trading",]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}

        />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            We give recommendation of the right stocks at the right time,
            technical & fundamental research of stocks and commodities market.
            Risk managed calls,
            Let us together work towards your financial goals so that you can fulfill all your aspirations and live the life you’ve always dream of for yourself and your family.


            Disclaimer : “Investment in securities market are subject to market risks. Read all the related documents carefully before investing.”
            </p>
            <div>
                <StockIndex />
            </div>
            <br />
            {/* Social media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
                <h1 className="font-bold ">Available on</h1>
                <ul className="flex space-x-5">
                 <li>
                 <a href="https://www.facebook.com/" target="_blank">
                    <FaSquareFacebook className="text-2xl cursor-pointer"/>
                    </a>
                  </li>  
                 <li>
                 <a href="https://www.linkedin.com/in/daksh-agarwal-/" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer"/>
                    </a>
                </li> 
                <li>
                <a href="https://www.youtube.com/" target="_blank">
                    <IoLogoYoutube className="text-2xl cursor-pointer"/>
                    </a>
                 </li> 
                 <li>
                 <a href="https://t.me/" target="_blank">
                    <FaTelegram className="text-2xl cursor-pointer"/>
                    </a>
                </li> 
                
                </ul>



            </div>
            <div className="space-y-2">
                <h1 className="font-bold">Views are personal</h1>
                <div className="flex space-x-5">
                <AiOutlineStock className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <RiStockFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <RiStockLine className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <AiOutlineStock className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>





                </div>
            </div>
            </div> 
            </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
             <img src={pic} className="rounded-full md:w-[400px] md: h-[450px] " />
             </div>
           </div>
        </div>
        <hr />

        </>

    )
        
}

export default Home;
