import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {  useNavigate } from "react-router";
import { useLocation } from "react-router";


function ProductPage() {
  const location = useLocation(); 

  const ogproduct = location.state?.product; 

  console.log(ogproduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const product = {
    id: 1,
    name: "Product Name",
    price: 999,
    image: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
  };

  const handleAddToCart = () => {
    dispatch(addToCart(ogproduct));
    navigate("/cart")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6 bg-white mx-6 rounded-2xl shadow-xl">
        <div className="p-6">
          <img src={ogproduct.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="text-center lg:text-left p-4">
          <h2 className="text-6xl font-semibold text-gray-900">{ogproduct.title}</h2>
          <p className="text-gray-600 mt-2">This is a short product description.</p>
          <p className="text-lg font-bold text-[#ff130a] mt-2">₹{ogproduct.price}</p>
          
          <a href="/cart">  <button 
            onClick={handleAddToCart}
            className="mt-4 bg-gradient-to-r from-[#d26d33] to-[#F15E28] rounded-md py-2 lg:px-10 px-4 text-white font-bold"
          >
            Add To Cart
          </button></a>
        
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

