import React, { useState, useEffect } from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import Userinfo from 'components/seat/userinfo'
import TopTripBanner from 'components/toptripbanner'

const BookingInfo = () => {
  return (
    <div>
      <Navi />
      <TopTripBanner />
      <Steps />
      <div className='flex justify-center items-center py-20'>
        <Userinfo />
      </div>
      <Footies />
    </div>
  )
}

export default BookingInfo