import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const List = () => {
  const { category } = useParams();
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    const fetdata=async()=>{
      try {
        const response=await axios.get(`http://localhost:9900/api/cards/getspecific/${category}`)
        setCards(response.data);
      } catch (error) {
        console.error(`Error in fetching data:`, error);
      }
    }
    fetdata();
  },[category])
  return (
    <div className="max-w-xl mx-auto p-4">
            <h1 className='text-white font-bold font-serif text-center mt-8 text-3xl mb-6'>{category} Cards for you!!!</h1>
            {cards.map((card) => (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex" key={card._id}>
                    <img
                        src={card.image}
                        alt="Card Image"
                        className="w-24 h-24 object-cover rounded mr-4"
                    />
                    <div>
                        <h2 className="text-xl font-bold mb-2">{card.cardName}</h2>
                        <p className="text-gray-700 mb-2">Bank: {card.bank}</p>
                        <p className="text-gray-700">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>

    

  )
}

export default List
