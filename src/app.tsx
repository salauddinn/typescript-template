import React from "react";
import  ReactDOM  from "react-dom";
import "./app.scss"
import LeftNavigation from "./leftNavigation";
import Lorem from "./lorem"
 const  App=()=>{
    return(
        <div className="app">
    <div className="nav">
        <LeftNavigation/> 
        </div>   
        <div className='content'>
<Lorem/>

        </div>
           
            </div>
    )
}
export default App;