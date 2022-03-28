import React from 'react'
import Ticket from '/components/ticket/ticket'
import Navbar from 'components/navbar/navi'
import Footer from 'components/footer/footies'
import Steps from 'components/ticket/steps'


const Buyticket = () => {
  return (
    <div>
        <Navbar/>
        <Steps/>
        <Ticket/>
        
        <Footer/>
    </div>
  )
}

export default Buyticket