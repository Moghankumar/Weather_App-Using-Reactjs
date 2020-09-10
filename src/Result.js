import React from 'react'
import './Result.css';
import {Button } from '@material-ui/core';



 const Result = ({temp,desc,icon,setTemp}) => {
    return (
        <div className="result">
            <div className="resultBox">
                <h1>Temperature : {temp} °C</h1>
                 <p>Description : {desc}</p>
                 <img src={icon} alt="Logo"/>
                 <br/>
                 <Button variant="contained" color="default" onClick={()=>{
                     setTemp("")
                 }}>Back</Button>
                 <br/><br/>
                 <p>Designed by Moghankumar</p>
            </div>
            
        </div>
    )
}
export default Result;