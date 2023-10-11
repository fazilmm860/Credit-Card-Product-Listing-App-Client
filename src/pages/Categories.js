import React from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
    const title = [
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
  
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold font-serif  text-center mt-8 text-3xl'>Select the Most Sutable Card for you!!!</h1>
                  <h3 className='text-white font-bold text-center mt-8'>
                            Navigating the sea of available credit cards can be a daunting task. However, 
                            taking the time to carefully peruse the options and select the most suitable card can yield significant benefits.
                            By considering factors such as interest rates, rewards programs, and annual fees, one can make an informed decision
                            that aligns with their financial goals and lifestyle. This thoughtful approach ensures that the chosen credit card 
                            not only meets immediate needs but also sets the stage for long-term financial success.
                        </h3>
                <div div className="min-h-screen flex justify-center items-center " >
                <div className="grid gap-1 grid-cols-1   md:grid-cols-5 ">
                {title.map((item, index) => (
                    <Link to={`/list/${item.choose}`} key={index}> {/* Pass the category in the URL */}
                        <div className="flex flex-col w-60 h-full  mt-3 m-5 mr-6  items-center justify-center rounded-lg bg-yellow-600 dark:bg-yellow-500 shadow-lg hover:bg-yellow-300 dark:hover:bg-yellow-800 md:max-w-xl md:flex-row">
                            <div className="flex flex-col justify-center p-6">
                                <h5 className="mb-2 text-xl font-medium text-neutral-50 text-center">
                                    {item.choose}
                                </h5>
                            </div>
                        </div>
                    </Link>
                ))}
                    </div>
                </div>

            </div>  


    
  )
}

export default Categories
