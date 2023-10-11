import React from 'react'

const AddCards = () => {
    const cat=[
        {
            choose: "Select the category",
            to: "/list"
        },
        {
            choose: "Life Time Free Credit Cards",
            to: "/list"
        },
        {
            choose: "Reward Credit Card",
            to: "/list"
        },
        {
            choose: "Classic Credit Card",
            to: "/list"
        },
        {
            choose: "Fuel Credit Card",
            to: "/list"
        },
        {
            choose: "Titanium Credit Card",
            to: "/list"
        },
        {
            choose: "Cashback Credit Card",
            to: "/list"
        },
        {
            choose: "Platinum Credit Card",
            to: "/list"
        },
        {
            choose: "Travel Credit Card",
            to: "/list"
        },
        {
            choose: "Business Credit Card",
            to: "/list"
        },
        {
            choose: "Co-Branded Credit Card",
            to: "/list"
        },
        {
            choose: "Secured Credit Card",
            to: "/list"
        },
        {
            choose: "Corporate Credit Card",
            to: "/list"
        },
        {
            choose: "Student Credit Card",
            to: "/list"
        },
        {
            choose: "Premium/Signature Credit Card",
            to: "/list"
        },
        {
            choose: "Entertainment Credit Card",
            to: "/list"
        },
    ]
  return (
    <div className="flex justify-center items-center h-screen">

    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-white text-2xl font-bold mb-4">Add Card</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="bank" className="block text-white font-bold mb-2">Bank</label>
          <input
            type="text"
            id="bank"
            name="bank"
           
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-100 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-white font-bold mb-2">Card Name</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-100 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-white font-bold mb-2">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-100 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-white font-bold mb-2">Category</label>
          <select
            id="category"
            name="category"
           
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-100 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          >
           
            {cat.map((item)=>(
                 <option value="">{item.choose}</option>
            ))}
         
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-100 border rounded shadow appearance-none focus:outline-none focus:shadow-outline h-24 resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </div>
    </div>
    
  )
}

export default AddCards
