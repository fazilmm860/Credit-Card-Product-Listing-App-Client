import { Link } from 'react-router-dom';
import React from 'react';
import './home.css';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold mb-4">Explore The best Credit Cards</h1>
        <p className="text-white text-center p-8">Credit cards come in a diverse array of categories to cater to varying financial needs. Standard credit cards offer basic purchasing power and often come with introductory offers. Rewards cards provide incentives like cashback, travel miles, or points for every transaction. For frequent travelers, travel credit cards offer benefits such as airport lounge access and travel insurance. Balance transfer cards enable users to consolidate debt from high-interest cards onto a single, lower-interest card. Secured credit cards require an initial deposit, making them accessible for those with limited or poor credit histories. Finally, business credit cards are tailored for entrepreneurs, offering perks like expense tracking and rewards tailored to business expenses.</p>
       <Link to='/category'> <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">Category</button></Link>
      </div>
    </div>
  );
}

export default HomePage;

