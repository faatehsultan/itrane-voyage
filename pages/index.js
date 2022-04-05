import Head from 'next/head'

import Navi from 'components/navbar/navi'
import FinalCard from 'components/card/finalCard'
import Features from 'components/card/features'
import Footies from 'components/footer/footies'
import  Testi from 'components/hero/realHero'
import Testimo from 'components/testimonial/testimonial'
import { useEffect, useState } from 'react'



export default function Home() {
  8
  return (
    <div>
        <Navi/>
      <Testi/>
      <h2 className="font-semibold mt-16 pt-12 sm:text-5xl text-center title-font text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600 mb-14">Obtenez votre billet en 3 simples étapes</h2>
      <FinalCard/>
      <Features/>
      <Testimo/>
      <Footies/>
      
      
    </div>

  )
}
