
import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import OfferCard from './components/OfferCard'
import HeroSection from './components/HeroSection';
import Section2 from './components/Section2';
import PopularItems from './components/PopularItems';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import SearchByFood from './components/SearchByFood';
import BestDeals from './components/BestDeals';
import AppDownload from './components/AppDownload';
import OrderBest from './components/OrderBest';
import Footer from './components/Footer';

function App() {
const  [offerProducts,setOfferProduct] = useState ([
  {
  id: 1,
  image: "/offer-1.png", 
  title: "Greys Vage",
  offer: "6 Days Remaining",
  price:"30"
},

{
  id: 2,
  image: "/offer-2.png", 
  title: "Greys Vage",
  offer: "6 Days Remaining",
  price:"38"

},
{
  id: 3,
  image: "/offer-3.png", 
  title: "Greys Vage",
  offer: "7 Days Remaining",
  price:"34"

},

{
  id: 4,
  image: "/offer-4.png", 
  title: "Greys Vage",
  offer: "8 Days Remaining",
  price:"40"

},



])
  return (
    <>


<main>

<HeroSection/>


<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  container gap-5 mt-14'>

{
offerProducts.map(product =>
  <OfferCard key={product.id} product ={product} />
)
}
</section>


<section className='mt-9 bg-gradient-to-b from-[#f7f0e0] to-[#fdfaf4]'>
<Section2/>
</section>

{/* popular items */}

<section className='' >
  <h2 className='text-center text-4xl font-bold my-10'>Popular items</h2>
  <PopularItems/>
</section>

{/* Featured Restaurants */}
<section>
  <h2 className='text-center text-4xl font-bold my-16'>Featured Restaurants</h2>
<FeaturedRestaurants/>
<div className='flex items-center justify-center mt-10'>
<button className='bg-gradient-to-r from-[#FEC64E] to-[#FF9A0E] rounded-md py-1 px-2 text-white font-bold'>View All &gt;</button>
</div>
</section>

{/* search By Food */}

<section className='bg-[#FEFAF1] mt-10 pb-10' >
<div className=' container '>
  <div className='pt-10 flex flex-row items-center justify-between '>
  <h3 className='font-bold text-3xl'>Search by Food</h3>

<div className='flex flex-row items-center gap-2 font-semibold '>
<a className='text-[#FAAA01]' href="">View All &gt; </a>
<div className='flex gap-2'>
<button className='bg-[#FAAA01] text-white rounded-full w-12 h-12 flex items-center justify-center '>&lt;</button>
<button className='bg-[#FAAA01] rounded-full w-12 h-12 flex items-center justify-center text-white '>&gt;</button>
</div>

</div>
</div>
<SearchByFood/>
</div>

</section>

{/* App Download */}
<section >
 
<AppDownload/>
 
</section>


<section className=''>
  <div className='mt-10'>
    <BestDeals/>
  </div>
</section>

<section className='mt-10'>
  <OrderBest/>
</section>

</main>


    </>
  )
}

export default App
