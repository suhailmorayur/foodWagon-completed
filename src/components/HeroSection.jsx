import React from 'react';

function HeroSection(props) {
    return (
       <>
       <section className='mt-3'>


<div className="relative bg-cover bg-center h-[500px] w-full" style={{ backgroundImage: "url('/header background.png')" }}>
  <div className="absolute inset-0 flex items-center justify-start container mx-auto px-5 ">
    <div className="">
      <h1 className="text-6xl  text-white font-bold">Are you starving?</h1>
      <p className="text-xl mt-2 text-gray-700">Within a few clicks, find meals that are accessible near you</p>



      <div className=" mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
  <div className="flex space-x-2 mb-4">
    <button className="flex flex-row items-center gap-2 py-1 px-3 bg-orange-100 text-orange-500 text-sm font-medium rounded-lg"> 
      <img src="/Icon-bike.png" alt="" />
      Delivery
    </button>
    <button className=" flex gap-2 py-1 px-3 text-gray-700 text-sm font-medium rounded-lg">
    <img src="/Icon-bag.png" alt="" />

      Pickup
    </button>
  </div>

  <div className="flex items-center space-x-3">
  
  <div className="relative flex flex-grow ">
    <input 
      type="text" 
      placeholder="Enter Your Address" 
      className="w-full pl-12 px-4 py-3 border rounded-lg focus:outline-none"
    />
    <img  
          className="absolute left-3 top-1/2 transform -translate-y-1/2 "

      src="/map-2.png" 
      alt="" 
    />
  </div>

  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg">
   <img src="/Search-2.png" alt="" />
    Find Food
  </button>
</div>

</div>
    </div>
   
  </div>
</div>

</section>
       
       </>
    );
}

export default HeroSection;