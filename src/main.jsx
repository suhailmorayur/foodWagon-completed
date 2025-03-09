import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import store from "./app/store.js";

import App from './App.jsx'
import ProductPage from './route/ProductPage.jsx'
import Layout from './route/Layout.jsx';
import CartPage from './route/CartPage.jsx';
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<App/>}/>
    <Route path='/products/:productId' element={<ProductPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>

    </Route>
  </Routes>
</BrowserRouter>,
 </Provider>
)

// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router"; // Fixed import
// import { Provider } from "react-redux";
// import store from "./app/store.js"; // Import your Redux store
// import "./index.css";

// import App from "./App.jsx";
// import ProductPage from "./route/ProductPage.jsx";
// import Layout from "./route/Layout.jsx";
// import CartPage from "./route/CartPage.jsx";

// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<App />} />
//           <Route path="/products/:productId" element={<ProductPage />} />
//           <Route path="/cart" element={<CartPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </Provider>
// );
