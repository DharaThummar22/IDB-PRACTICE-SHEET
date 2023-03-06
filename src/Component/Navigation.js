import React from "react";
import { useNavigate } from "react-router-dom";

function Navigatation()
{
    const navigate=useNavigate();
    const navToPage=(url)=>{
        navigate(url)
    }
    return(
        <div>
            
            <h2>ThIS IS EXAMPLE OF HOW TO NAVIGATE PROGRAMATICALLY</h2>
            <button onClick={()=>navToPage('/HOME')}>GO TO HOME PAGE</button>
            <button onClick={()=>navToPage('/CONTACT')}>GO TO CONTACT PAGE</button>
            <button/>
            
        </div>
    )
}
export default Navigatation;