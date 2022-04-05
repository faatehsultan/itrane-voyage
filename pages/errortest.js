import React from 'react'
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'


const Noresults = () => {
  return (
    <div >
      <Navi/>
      
      <div classNameName="m-12 py-12 pb-12">
      <div className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-red-600"> 404</h1>
            <h1 className="text-4xl font-medium py-8">oops! Nous n&lsquo;avons trouvé aucun bus</h1>
            <p className="text-2xl pb-8 px-12 font-medium">Il n&lsquo;y a pas encore de trajet disponible le jeudi 7 avril entre ces villes</p>
            <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
            Accueil
            </button>
            <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
            Contactez nous
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div classNameName="mt-12 pt-12">
      <Footies/>
      </div>
      
    </div>
  )
}

export default Noresults


