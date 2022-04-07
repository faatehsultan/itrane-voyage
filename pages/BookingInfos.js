import React, { useState, useEffect } from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import TicketSummary from 'components/ticket/ticketSummary'
import Userinfo from 'components/seat/userinfo'

import { useRouter } from 'next/router'
import Link from 'next/link'

const BookingInfos = () => {

  return (
    <div>
       <Navi/>
      <Steps />
<div className="py-24 mt-12 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">


  <div className="flex justify-center  items-center  space-y-2 flex-col pb-8">
    <h1 className="text-4xl   lg:text-5xl font-semibold leading-7 h-20 lg:leading-9 text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600">Ticket Summary</h1>
    <p className="text-xl  -gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
    

      <div className="flex flex-col justify-start items-start   w-full">
        <div className="w-full">
          
          <TicketSummary/>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-slate-100 shadow-xl  rounded-md  g-gray-800 space-y-6">
          <h3 className="text-xl   font-semibold leading-5 text-gray-800">Summary</h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base   leading-4 text-gray-800">Subtotal</p>
              <p className="text-base    -gray-300 leading-4 text-gray-600">$56.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base   leading-4 text-gray-800">Discount <span className="bg-slate-200 shadow-xl  rounded-md p-1 text-xs font-medium     g-white    -gray-800 leading-3 text-gray-800">STUDENT</span></p>
              <p className="text-base    -gray-300 leading-4 text-gray-600">-$28.00 (50%)</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base   leading-4 text-gray-800">Shipping</p>
              <p className="text-base    -gray-300 leading-4 text-gray-600">$8.00</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base   font-semibold leading-4 text-gray-800">Total</p>
            <p className="text-base    -gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
          </div>
        </div>
        
      </div>
    </div>
    <div className="bg-slate-100 shadow-xl  rounded-md    g-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 className="text-xl   font-semibold leading-5 text-gray-800">Traveler</h3>
      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div className="flex flex-col justify-start items-start flex-shrink-0">
          <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-base   font-semibold leading-4 text-left text-gray-800">Traveler Name</p>
              <p className="text-sm    -gray-300 leading-5 text-gray-600">2 extra seats</p>
            </div>
          </div>

          <div className="flex justify-center text-gray-800   md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="cursor-pointer text-sm leading-5 ">test@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-2 xl:space-y-8 md:space-y-0 md:flex-row items-center md:items-start">
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-2 xl:mt-8">
              <p className="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">Address</p>
              <p className="w-48 lg:w-full    -gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Test address1</p>
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-2 xl:mt-8">
              <p className="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">Phone Number</p>
              <p className="w-48 lg:w-full    -gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">454545454</p>
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-2 xl:mt-8">
              <p className="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">City</p>
              <p className="w-48 lg:w-full    -gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">City name</p>
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 pt-4">
              <p className="text-base   font-semibold leading-4 text-center md:text-left text-gray-800">Payment Option</p>
              <p className="w-48 lg:w-full     -gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Credit Card</p>
            </div>
          </div>
          <div className="flex mt-12 w-full justify-center items-center md:justify-start md:items-start">
            <button className="mt-6 md:mt-0     order-white dark:hover:bg-gray-900     g-transparent   py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border  font-medium w-96 2xl:w-full text-base font-medium leading-4 text-white">Save Ticket</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footies/>
    </div>
  )
}

export default BookingInfos