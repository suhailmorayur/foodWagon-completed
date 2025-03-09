import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

function Layout(props) {
    return (
     <>
     <header>
        <Header/>
     </header>

<Outlet/>

     <footer className='bg-[#212121]'>
<Footer/>
     </footer>
     </>
    );
}

export default Layout;