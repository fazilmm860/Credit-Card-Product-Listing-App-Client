import React from 'react'

const List = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
        <h1 className='text-white font-bold font-serif  text-center mt-8 text-3xl mb-6'>LifeTime Free Credit Cards for you!!!</h1>
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfyZoEyXgcZksjs1I0sgP1LOmp0FDOX1NiQ&usqp=CAU"
        alt="Card Image"
        className="w-24 h-24 object-cover rounded mr-4"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">Card Name</h2>
        <p className="text-gray-700 mb-2">Bank: XYZ Bank</p>
        <p className="text-gray-700">Description of the card goes here.</p>
      </div>
    </div>

    {/* Add more card boxes as needed */}
  </div>
  )
}

export default List
