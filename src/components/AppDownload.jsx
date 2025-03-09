import React from 'react';

function AppDownload(props) {
    return (
       <>
        <div className='bg-[#FEEFD0] pt-10 '>
  <div className=' container flex items-center '>
  <img src="/card.png" alt="" />
  </div>
  </div>

<div className=" hidden lg:block relative justify-center items-center">
  <img src="/Download.png" alt="Download App" className="w-full h-auto" />

  <div className="  absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-center text-white flex flex-col items-start justify-center  ">
    <h3 className="lg:text-5xl font-bold text-[#FFB800]">Install the app</h3>
    <p className="text-sm mt-2 max-w-md text-left text-black">
      It's never been easier to order food. Look for the finest discounts and
      you'll be lost in a world of delectable food.
    </p>

    <div className="flex flex-row  gap-5 mt-4">
      <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg shadow-md">
        <img src="/Google Play logo.png" alt="Google Play" className="w-8 h-8" />
        <div className="flex flex-col items-start">
          <span className="text-xs">Get It On</span>
          <span className="font-bold">Google Play</span>
        </div>
      </button>

      <button className="flex items-center gap-2 bg-white text-black lg:px-4 lg:py-2 rounded-lg shadow-md">
        <img src="/Apple logo.png" alt="Apple Store" className="w-8 h-8" />
        <div className="flex flex-col items-start">
          <span className="text-xs">Download on the</span>
          <span className="font-bold">App Store</span>
        </div>
      </button>
    </div>
  </div>
</div>

<div className='lg:hidden'>
  <img src="/App Download mb.png" alt="" />
</div>
       </>
    );
}

export default AppDownload;