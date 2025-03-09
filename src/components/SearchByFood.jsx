import React, { useState } from 'react';

function SearchByFood(props) {
const [searchByFood,setsearchByFood] = useState([
    {  id:'1',
        Image:'/pizza.png',
        title: 'Pizza'
    },
    {
      id:'2',
      Image: '/Burger.png',
      title:'Burger'
    },
    {
        id:'3',
        Image: '/Noodles.png',
        title:'Noodles'
      },
      {
        id:'4',
        Image: '/Sub-sandiwch.png',
        title:'Sub-sandiwch'
      },
      {
        id:'5',
        Image: '/Chowmein.png',
        title:'Chowmein'
      },
      {
        id:'6',
        Image: '/Steak.png',
        title:'Steak'
      },
      

])
    return (
       <>
       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-10'>
        {
            searchByFood.map((product) =>(
                <div key={product.id} className='flex flex-col items-center justify-center gap-2'>
                 <img src={product.Image} alt={product.title} />
               <a href={'/products/'+product.id}><h3 className='text-xl font-semibold text-center'>{product.title}</h3></a>  
                </div>
            ))
        }
       </div>
       </>
    );
}

export default SearchByFood;