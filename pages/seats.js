import React, { useState, useEffect } from 'react'
import Seatpick from 'components/seat/seatpick'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import Userinfo from 'components/seat/userinfo'
import { useRouter } from 'next/router'

const Seats = () => {
  const router = useRouter();
  const [seatsData, setSeatsData] = useState([])
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query.schedule_id) {
      setLoading(true)
      fetch(`/api/getSeatsForSchedule?schedule_id=${router.query.schedule_id}`)
        .then(res => res.json())
        .then(data => {
          setSeatsData(data)
          setLoading(false)
        })
    }
  }, [router.query.schedule_id]);

  const handleSubmit = async (userInfoObj) => {
    console.log(userInfoObj)
    console.log(selectedSeats)
    // add validations here
    let res = await fetch("/api/postBooking", {
      method: "POST",
      body: JSON.stringify({
        userInfoObj,
        selectedSeats
      })
    })
    console.log(res)
  }

  return (
    <div>
      <Navi />
      <Steps />
      {loading ?
        "Loading..." :
        <div className='flex justify-center items-center gap-20 py-20'>
          <Seatpick seatsData={seatsData} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
          <Userinfo handleSubmit={handleSubmit} />
        </div>}
      <Footies />
    </div>
  )
}

export default Seats