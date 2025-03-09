import React from 'react';
import { useSelector } from 'react-redux';

function Total(props) {
const items = useSelector(state=> state.cart.items)
const total =items.reduce((sum,item)=>{
return sum + item.price * item.quantity
},0)
console.log(items);
    return (
        <div>
            <button className='bg-black w-full text-white py-3 rounded-2xl'>Pay $ {total}  </button>
        </div>
    );
}

export default Total;