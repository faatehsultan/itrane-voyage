import React, { useState } from 'react'

export default function PaymentComponent({ handleConfirmTicket }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='flex justify-content content-center gap-20 py-20'>
      <button
        onClick={() => {
          handleConfirmTicket("cash")
        }}
      >Pay Via Cash and Confirm</button>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >Pay Via Credit Card</button>

      {showModal && <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="backdrop-brightness-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center pt-20">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-end p-2">
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="authentication-modal" onClick={() => setShowModal(false)}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={e => {
              e.preventDefault();
              handleConfirmTicket("card")
            }}>
              <h3 className="text-xl font-medium text-gray-900">Sign in to our platform</h3>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Card Number</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1234XXXXXXXXXXXX" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Expiry</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="MM/YYYY" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">CVC</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="XXX" required />
              </div>
              <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >Pay and Confirm</button>
            </form>
          </div>
        </div>
      </div>}
    </div>
  )
}
