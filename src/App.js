import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'

const HatPage = () =>(
    <h1>HAT Page</h1>
)
function App() {
  return (
    <div >
        <BrowserRouter>
            <Route exact path="/" component={Homepage}/>
            <Route  path="/hats" component={HatPage}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
