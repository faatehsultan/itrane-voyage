import React from 'react'
import Carousel from './carousel'
import Card from './card'

const FinalCard = () => {
  return (
    <div className="  mx-auto md:flex grid grid-cols-1 ">
            
            <div className=" h-fill px-12 mt-20 ">
                 <Carousel/>
            </div>
            <div className="w-3/4 ">
                <Card/>
            </div>
    </div>
  )
}

export default FinalCard