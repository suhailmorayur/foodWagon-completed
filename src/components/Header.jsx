import React from 'react';

function Header(props) {
    return (
       <>
       <header className='block lg:hidden'>
        <div className=' container flex items-center justify-between'>
        <div className=' '>
        <img className="w-[197px] h-[30.77px]" src="/Logo.png" alt="" />
        </div>
        <button><img src="/menu.png" alt="" /></button>

        </div>
       
       </header>

       
       {/* lg screen viwe */}

       <header className='mt-3 hidden lg:block'>
        
  <div className='container mx-auto px-5 flex flex-row items-center justify-between '>
    
<img className="w-[197px] h-[30.77px]" src="/Logo.png" alt="" />






<div className='flex flex-row items-center justify-center gap-2  '>
<span>Deliver to:     </span>
<img src="/map.png" alt="" />
<span>Current Location</span>
<span>Mohammadpur Bus Stand, Dhaka</span>
</div>

<div className='flex flex-row items-center justify-center gap-5'>
  <img className='' src="/Search.png" alt="" />
  <span className='font-bold ' >Search Food</span>
  <button className='rounded-lg shadow-md shadow-orange-300 py-2 px-5 border-orange-400  flex flex-row items-center justify-center gap-2 text-[#FF8A00] font-bold'><img src="/user.png" alt="" /> Login </button>
</div>
</div>
</header>
       </>
    );
}

export default Header;