import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementqty, incrementqty, removeFromCart } from '../features/cart/cartSlice';
import RecomentedProducts from '../components/RecommendedProducts';
import Total from '../components/Total';

function CartPage(props) {
    const cartItems = useSelector((state) => state.cart.items);
const dispatch = useDispatch()

 const handleremovefromCart =(id) => {
           dispatch(removeFromCart(id));

  }

  const handleIncrementqty =(id) => {
    dispatch(incrementqty(id));
}

const handleDecrementqty =(id) => {
    dispatch(decrementqty(id));
}


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md mt-10 mb-10">
        <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

 <div className='flex gap-5'> 

 
              <div className="flex items-center gap-4  p-2 rounded-lg">
  <button onClick={() => handleDecrementqty(item.id)} className="bg-slate-400 text-white px-3 py-1 rounded-md font-semibold text-2xl">-</button>
  <span className="text-xl font-medium"> {item.quantity} </span>
  <button  onClick={() => handleIncrementqty(item.id)}
 className="bg-slate-400 text-white px-3 py-1 rounded-md font-semibold text-2xl">+</button>
</div>
              <button 
                onClick={() => handleremovefromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Remove
              </button>
              </div>
            </div>
          ))
        )}
            <Total/>

      </div>
      <h2 className='font-extrabold text-2xl text-red-800 mt-8'>Recommended Products</h2>
      <RecomentedProducts/>

    </div>
    );
}

export default CartPage;