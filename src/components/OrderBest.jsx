import React from 'react';

function OrderBest(props) {
    return (
       <>
       <div className=' relative'>
    <img className=' lg:h-72 w-full h-40' src="/orderBest.png" alt="" />
    <div className=' flex flex-col items-center justify-center gap-6 absolute lg:top-40 top-6
     right-20 lg:right-72 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2'>
<h4 className='lg:text-4xl text-center text-white font-bold'>Are you ready to order with<br />the best deals?</h4>
<button className='bg-gradient-to-r from-[#d26d33] to-[#F15E28] rounded-md py-2 
lg:px-10 px-2 text-white font-bold'>Proceed to order  &gt;</button>

    </div>
  </div>
       </>
    );
}

export default OrderBest;