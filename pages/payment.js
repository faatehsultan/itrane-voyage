import React, { useState, useEffect } from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import Userinfo from 'components/seat/userinfo'
import { useRouter } from 'next/router'
import TopTripBanner from 'components/toptripbanner'
import PaymentComponent from 'components/paymentcomponent'

const Payment = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (paymentMode) => {
    let res = await fetch("/api/postBooking", {
      method: "POST",
      body: JSON.stringify({
        userInfoObj: JSON.parse(router.query.userInfoObj),
        selectedSeats: router.query.selectedSeats.split(",").map(i => parseInt(i)),
        schedule_id: router.query.schedule_id,
        paymentMode
      })
    })
    if (res.status === 200) {
      router.push(`/confirmation?schedule_id=${router.query.schedule_id}&selectedSeats=${router.query.selectedSeats}&userInfoObj=${router.query.userInfoObj}&payment_mode=${paymentMode}`)
    } else {
      // failure
    }
  }

  return (
    <div>
      <Navi />
      <TopTripBanner />
      <Steps />
      <div className="flex justify-center content-center">
        <PaymentComponent handleConfirmTicket={handleSubmit} />
      </div>
      <Footies />
    </div>
  )
}

export default Payment