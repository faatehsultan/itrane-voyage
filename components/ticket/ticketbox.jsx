import React from 'react'
import Link from 'next/link'

const Ticketbox = () => {
  return (
    
    <div className="">
        <div className=" shadow-xl hover:shadow-orange-100 rounded-xl title-font bg-white grid grid-cols-6 grid-rows-8 gap-  ">
	        <div className="box text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600 rounded-xl place-self-center text-3xl antialiased font-bold row-span-6 col-span-2">Agadir - Casablanca</div>
	        <div className="box rounded-xl place-self-center mt-4 text-slate-700 text-xl antialiased font-bold row-span-3 col-span-2">Massira Station - Wlad Zyan Station</div>
	        <div className="box rounded-xl place-self-center mt-4 text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 text-3xl antialiased font-bold row-span-3 col-start-3 col-span-2">8:00 AM - 12:00 PM</div>
	        <div className="box text-transparent bg-clip-text mt-4 bg-gradient-to-br from-red-400 to-red-600 text-3xl antialiased font-bold row-start-1 row-span-4 place-self-center col-start-5 col-span-2">120 MAD</div>
	        <div className="box rounded-xl grid row-span-2 col-span-2 mt-4 mb-8">
            <Link href='/seats' passHref>
                <button className="place-self-center  mt-6">Select Seat</button>
                </Link>    
            </div>
        </div>
    </div>
  )
}

export default Ticketbox