import React from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import Faqs from 'components/faq/faqs'

const faq = () => {
  return (
    <div className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500">
      <Navi/>
      
      <div className="m-12 py-12 pb-12">
<Faqs/>
      </div>
      <div className="mt-12 pt-12">
      <Footies/>
      </div>
      
    </div>
  )
}

export default faq