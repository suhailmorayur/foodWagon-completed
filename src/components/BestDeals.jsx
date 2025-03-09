import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../features/cart/cartSlice";
import {  useNavigate } from "react-router";
function BestDeals(props) {
  const dispatch = useDispatch();
 const navigate = useNavigate();
  const handleAddToCart = (product) => {
            dispatch(addToCart(product))
            navigate("/cart")
  
          };
    const [bestDeals,setbestDeals] = useState([
        {
            id:'1',
            image:'/Best1.png',
            title: (
                <>
                  <span className="text-black">Best deals</span>{" "}
                  <span className="text-yellow-500">Crispy Sandwiches</span>
                </>
              ),
            des:'Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.',
             price:"4"
        },
        {
            id:'2',
            image:'/Best2.png',
            title: (
                <>
                  <span className="text-black">Celebrate  parties with</span>{" "}
                  <span className="text-yellow-500">Fried Chicken</span>
                </>
              ),
            des:'Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.',
            price:"4"
        },
        {
            id:'3',
            image:'/Best3.png',
            title: (
                <>
                  <span className="text-black">Wanna eat hot & spicy</span>{" "}
                  <span className="text-yellow-500">Pizza?</span>
                </>
              ),
            des:'Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.',
             price:"4"
        },
    

    ])
    return (
        <div className=' container grid gap-14'>
            {
                bestDeals.map((product,index)=>(
                    <div  key={product.id}  className={`flex products-center  rounded-2xl shadow-md ${
                        index % 2 === 0 ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
                      }`}>
                        <div className=''>
                        <img  src={product.image} alt={product.title}  className={` ${
                index % 2 === 0
                  ? "rounded-tr-2xl rounded-br-2xl" 
                  : "rounded-tl-2xl rounded-bl-2xl" 
              }`} />
                        </div>
                        
                            <div className='px-16 flex flex-col items-center gap-6 mb-5 mt-6 lg:mt-0  lg:gap-20'>
                                <div className='flex flex-col gap-4'>
                                <a href={'/products/'+product.id}><h3 className='text-xl lg:text-4xl font-bold'>{product.title}</h3></a>
                                
                                <span className='text-[#747171]'>{product.des}</span>
                                </div>
                          
                            <div>
                            <button onClick={() => handleAddToCart(product)} className='bg-gradient-to-r from-[#FEC64E] to-[#FF9A0E] rounded-md py-2 lg:px-16 px-2 text-white font-bold'>Proceed to order  &gt;</button>
                            </div>
                            </div>
                           
                       
                    </div>
                ))
            }
        </div>
    );
}

export default BestDeals;