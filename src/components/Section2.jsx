import React from 'react';

function Section2(props) {
    return (
       <>
<div class=" container">

<div>
<h2 className='text-center pt-5 text-[#F17228] font-black text-2xl'>How does it work</h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 p-9'>

<article className='flex flex-col items-center justify-center gap-1'>
  <img className='h-28' src=" /Map Marker.png" alt="" />
  <h3 className='font-bold'> Select location</h3>
  <p  className=' text-sm text-center text-[#9E9E9E]'>Choose the location where your 
    food will be delivered.
    </p>
</article>

<article className='flex flex-col items-center justify-center'>
  <img className='h-28' src=" /choose order.png" alt="" />
  <h3 className='font-bold'> Choose order</h3>
  <p  className='text-sm text-center text-[#9E9E9E]'>Check over hundreds of menus to pick your favorite food 
    </p>
</article>

<article className='flex flex-col items-center justify-center'>
  <img className='h-28' src=" /pay advanced.png" alt="" />
  <h3 className='font-bold'> Pay advanced</h3>
  <p  className='text-sm text-center text-[#9E9E9E]'>It's quick, safe, and simple. Select several methods of payment
    </p>
</article>

<article className='flex flex-col items-center justify-center'>
  <img className='h-28' src=" /enjoy meals.png" alt="" />
  <h3 className='font-bold'> Enjoy meals</h3>
  <p  className=' text-sm text-center text-[#9E9E9E]'>Food is made and delivered directly to your home.
    </p>
</article>
</div>

</div>

</div>

       </>
    );
}

export default Section2;