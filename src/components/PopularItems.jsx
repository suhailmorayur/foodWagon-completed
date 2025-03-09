

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../features/cart/cartSlice";
import {  useNavigate } from "react-router";

function PopularItems(props) {
  const dispatch = useDispatch();
 const navigate = useNavigate();
  const [popularItems, setPopularItems] = useState([
    {
      id: 1,
      image: "/Cheese Burger.png", 
      title: "Cheese Burger",
      location: "Burger Arena",
      price: "3.88"          

      
    },
    {
      id: 2,
      image: "/Toffes Cake.png",
      title: "Toffes Cake",
      location: "Top Sticks",
      price: "4.00"
    },
    {
      id: 3,
      image: "/Dancake.png",
      title: "Dancake",
      location: "Cake World",
      price: "1.99 "
    },
    {
      id: 4,
      image: "/Crispy Sandwitch.png",
      title: "Crispy Sandwitch",
      location: "Fastfood Dine",
      price: "3.00"
      
    },
    {
        id: 5,
        image: "/Thai  Soup.png",
        title: "Thai  Soup",
        location: "Foody man",
      price: "2.79"
    },
  ]);

 const handleAddToCart = (product) => {
          dispatch(addToCart(product))
          navigate("/cart")

        };
  return (
    <div className=" container mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {popularItems.map((product) => (
        <div key={product.id} className="flex flex-col gap-3 ">
          <img
            className="rounded-xl w-full h-auto object-contain"
            src={product.image}
            alt={product.title}
          />
          <Link to={`/products/${product.id}`} state={{ product }}>
          <h2 className="text-lg font-semibold">{product.title}</h2>
</Link>
        <div className="flex flex-row items-center gap-2">
        <img src="/map.png" alt="" />
         <span className="text-[#FFB30E]"> {product.location} </span>
        </div>

          <span className="font-bold">
           $ {product.price}
          </span>
          <button onClick={() => handleAddToCart(product)} className="bg-[#F17228] rounded text-white py-1 font-semibold">Order Now</button>
        </div>
      ))}
    </div>
  );
}

export default PopularItems;
