import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div >
        <BrowserRouter>
            <Route exact path="/" component={Homepage}/>
            <Route  path="/shop" component={ShopPage}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
