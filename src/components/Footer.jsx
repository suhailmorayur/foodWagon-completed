import React from 'react';

function Footer(props) {
    return (
       <>
       <div className=' container'>

<div className='pt-10 pb-10'>
  <h3 className='text-white'>Our top cities</h3>
  <div className=' mt-5 items-center justify-between text-[#F5F5F5] grid lg:grid-cols-5 grid-cols-2 gap-5 '>
    <ul>
      <li>San Francisco</li>
      <li>Miami</li>
      <li>San Diego</li>
      <li>East Bay</li>
      <li>Long Beach</li>
    </ul>
    
    <ul>
      <li>Los Angeles</li>
      <li>Washington DC</li>
      <li>Seattle</li>
      <li>Portland</li>
      <li>Nashville</li>
    </ul>

    <ul>
      <li>New York City</li>
      <li>Orange County</li>
      <li>Atlanta</li>
      <li>Charlotte</li>
      <li>Denver</li>
    </ul>

    <ul>
      <li>Chicago</li>
      <li>Phoenix</li>
      <li>Las Vegas</li>
      <li>Sacramento</li>
      <li>Oklahoma City</li>
    </ul>

    <ul>
      <li>Columbus</li>
      <li>New Mexico</li>
      <li>Albuquerque</li>
      <li>Sacramento</li>
      <li>New Orleans</li>
    </ul>

   
  </div>
</div>


<hr className="border-t-2 border-[#424242]" />
  </div>


<div className=' container mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-60'>
<div className='flex flex-row gap-5 justify-between text-[#F5F5F5]' >
<ul>
<h3 className='pb-5 font-extrabold'>Company</h3>
 <li>About us</li>
      <li>Team</li>
      <li>Careers</li>
      <li>Blog</li>
    </ul>
    
    <ul>
    <h3 className='pb-5 font-extrabold'>Contact</h3>

      <li>Help & Support</li>
      <li>Partner with us </li>
      <li>Ride with us</li>
      
    </ul>

    <ul>
    <h3 className='pb-5 font-extrabold'>Legal</h3>

      <li>Terms & Conditions</li>
      <li>Refund & Cancellation</li>
      <li>Privacy Policy</li>
      <li>Cookie Policy</li>
    </ul>

</div>

<div className='flex flex-col gap-5 text-[#BBBBBB]'>
<a className='' href="">FOLLOW US</a>
<div className='flex flex-row gap-5'>
  <img src="/insta.png" alt="" />
  <img src="/face.png" alt="" />
  <img src="/x.png" alt="" />
</div>
<h4>Receive exclusive offers in your mailbox</h4>


<div className="flex items-center space-x-3">
  
  <div className="relative flex flex-grow ">
    <input 
      type="text" 
      placeholder="Enter Your email" 
      className="w-full pl-12 px-4 py-3 border rounded-md focus:outline-none bg-[#424242]"
    />
    <img  
          className="absolute left-3 top-1/2 transform -translate-y-1/2 "

      src=".mail.png" 
      alt="" 
    />
  </div>

  <button className="flex items-center justify-center bg-gradient-to-r from-[#FEC64E] to-[#FF9A0E] gap-2 px-6 py-3 text-white font-bold rounded-md">
  Subscribe
  </button>
</div>

</div>


</div>

<div className=' container pt-10'>
<hr className="border-t-2 border-[#424242] " />

<div className=' py-5 flex lg:flex-row flex-col items-center justify-between'>
<div className='flex gap-2 text-white'>
<span>All rights Reserved</span>
<p className='font-bold'>&copy; Your Company, 2021</p>
</div>
<div className='flex gap-2 text-white'>
<p>Made with 💛 by</p>
<p className='font-bold'>Suhail K</p>

</div>
</div>
</div>
       </>
    );
}

export default Footer;