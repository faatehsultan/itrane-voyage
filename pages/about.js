import React from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import ContactMap from 'components/about/contactmap'
import Desti from 'components/about/destinations'

const faq = () => {
  return (
    <div>
      <Navi/>
      
      <div className="m-12 py-12 pb-12">
<ContactMap/>
      </div>
 
      <Desti/>

      <Footies/>
    </div>
  )
}

export default faq