import React from 'react'

const Userinfo = () => {
  return (
    <div>
        <div className="w-full md:w-96 md:max-w-full mx-auto">
  <div className="p-6 border border-gray-300 sm:rounded-md">
    <form
      method="POST"
      action="https://herotofu.com/start"
      encType="multipart/form-data"
    >
      <label className="block mb-6">
        <span className="text-gray-700">Your name</span>
        <input
          name="name"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-md
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-50
          "
          placeholder="Joe Bloggs"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Address line 1</span>
        <input
          name="address1"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-md
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-50
          "
          placeholder=""
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Address line 2</span>
        <input
          name="address2"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-md
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-100
          "
          placeholder=""
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">City</span>
        <input
          name="city"
          type="text"
          className="
            block
            w-full
            mt-2
            h-
            border-gray-300
            rounded-md
            shadow-md
            ring-red-800
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-50
          "
          placeholder=""
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">State/Province</span>
        <input
          name="state"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-md
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-50
          "
          placeholder=""
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Zip/Postal code</span>
        <input
          name="zip"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-md
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-50
          "
          placeholder=""
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Country</span>
        <input
          name="country"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-md
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-50
          "
          placeholder=""
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Telephone</span>
        <input
          name="telephone"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-md
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-50
          "
          placeholder=""
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Delivery information</span>
        <textarea
          name="message"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-md
            focus:border-red-300
            focus:ring
            focus:ring-red-200
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="floor/door lock code/etc."
        ></textarea>
      </label>
      <div className="mb-6  flex items-center justify-center">
        <button
         className="w-1/3"
          
        >
          Save
        </button>
      </div>
     
    </form>
  </div>
</div>

    </div>
  )
}

export default Userinfo