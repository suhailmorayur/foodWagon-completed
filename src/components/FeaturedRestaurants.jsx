import React, { useState } from 'react';
import { Link } from "react-router";

function FeaturedRestaurants(props) {
const [featuredRestaurants, setFeaturedRestaurants] = useState([
    {
        id: 1,
        image: "/Foodworld.png",
        title: "Foodworld",
        logo: "/Foodworld logo.png",
        rating: "46",
        status: "Opens tomorrow",
        price:"38"


      
    },  
    {
      id: 2,
      image: "/Pizzahub.png",
      title: "Pizzahub",
      logo: "/Pizzahub Logo.png",
      rating: "40",
      status: "Opens tomorrow",
      price:"36"
     
    },
    {
      id: 3,
      image: "/Donuts hut.png",
      title: "Donuts hut",
      logo: "/Donuts hut Logo.png",
      rating: "20",
      status: "Open Now",
      price:"35"

    },
    {
      id: 4,
      image: "/Donuts hut2.png",
      title: "Donuts hut",
      logo: "/Donuts hut Logo 2.png",
      rating: "50",
      status: "Open Now",
      price:"39"

      
    },
    {
        id: 5,
        image: "/Ruby Tuesday.png",
        title: "Ruby Tuesday",
        logo: "/Ruby Tuesday Logo.png",
        rating: "26",
        status: "Open Now",
        price:"50"

    },{
        id: 6,
        image: "/kuakata fried chicken.png",
        title: "Kuakata Fried Chicken",
        logo: "/kuakata fried chickenLogo.png",
        rating: "53",
        status: "Open Now",
        price:"10"

    },{
        id: 7,
        image: "/Red Square.png",
        title: "Red Square",
        logo: "/red square Logo.png",
        rating: "45",
        status: "Open Now",
        price:"70"

    },{
        id: 8,   
         image: "/taco bell.png",
        title: "Taco Bell",
        logo: "/taco bell Logo.png",
        rating: "35",
        status: "Open Now",
        price:"60"

    }
  ]);


    return (
        <div className=' container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {
            featuredRestaurants.map((product) =>(
                <div key={product.id}>
<img src= {product.image} alt="" />
            <div className='flex flex-row gap-5 mt-5 products-center '>
                <img src={product.logo} alt="" />
                <div className=''>
                <Link to={`/products/${product.id}`} state={{ product }}>
        <h2>{product.title}</h2>
      </Link>                    <div className='flex gap-2 '>
                        <img src="/star.png" alt="" />
                        <span className='text-[#FFB30E]'>{product.rating}</span>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
            {
                product.status === 'Open Now'?( <span className='bg-[#E5F3D8] text-[#79B93C] font-bold rounded py-1 px-2'> {product.status} </span> )
                 : ( <span className='bg-[#FFE1D0] text-[#F17228] font-bold rounded py-1 px-2'>{product.status}</span>
                )
            }
            </div>
           
                </div>
            ))
        }
                    
            
        </div>
    );
}

export default FeaturedRestaurants;