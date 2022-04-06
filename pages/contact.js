import React from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import ContactMap from 'components/about/contactmap'

const Contact = () => {
  return (
    <div>

        <Navi/>
      
    <div className="m-12 py-12 pb-12">
        <ContactMap/>
    </div>
        <Footies/>
    </div>
  )
}

export default Contact