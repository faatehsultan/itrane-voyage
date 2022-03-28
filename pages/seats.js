import React from 'react'
import Seatpick from 'components/seat/seatpick'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Steps from 'components/ticket/steps'
import Userinfo from 'components/seat/userinfo'

const Seats = () => {
  return (
    <div>
        <Navi/>
        <Steps/>
        <Seatpick/>
        <Userinfo/>
        <Footies/>
    </div>
  )
}

export default Seats