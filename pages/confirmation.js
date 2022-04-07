import React, { useState, useEffect } from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import Userinfo from 'components/seat/userinfo'
import TopTripBanner from 'components/toptripbanner'
import { useRouter } from 'next/router'
import Link from 'next/link'

const BookingInfo = () => {
  const [sch, setSch] = useState({});
  const router = useRouter();
  const [user] = useState(JSON.parse(router.query.userInfoObj))

  const detailData = [
    ["Pickup", sch.src],
    ["Destination", sch.dest],
    ["Date", sch.dept_date],
    ["Time", sch.start_time + " - " + sch.end_time],
    ["Start Station", sch.start_station],
    ["Start End", sch.end_station],
    ["Price", sch.end_station],
    ["Seats", router.query.selectedSeats],
    ["Name", user.name],
    ["Address", user.address1],
    ["City", user.city],  
    ["Email", user.email],
    ["Telephone", user.phone],
    ["State", user.state],
    ["Zip", user.zip],
  ]

  return (
    <div>
      <Navi />
      <TopTripBanner setScheduleForOuterUser={setSch} />
      <Steps />
      <div className='flex flex-col justify-center items-center py-20'>
        {/* create a table showing user details */}
        <div className='text-3xl'>Ticket Info</div>
        <br />
        <table className='table-auto'>
          <tbody>
            {detailData.map((i, ind) => (
              <tr key={ind}>
                <td>{i[0]}: </td>
                <td style={{ paddingLeft: "15px", fontWeight: "bold" }}>{i[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <div className='text-2xl'>Thank you for ordering with us!</div>
        <br />
        <Link href="/"><a type='button' className='bg-red-500 p-4 rounded text-white'>Go To Home</a></Link>
      </div>
      <Footies />
    </div>
  )
}

export default BookingInfo