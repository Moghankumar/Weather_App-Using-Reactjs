import React from 'react'
import Input from '@material-ui/core/Input';
import {Button } from '@material-ui/core';
import "./input.css";

const Inputer = ({input,setInput,findweather}) => {
        const handleChange=(event)=>{
            setInput(event.target.value)

        };
        console.log(input);

        const handleClick=(event)=>{
            event.preventDefault();
            findweather();
        }

    return (
    <div className="App">
        <div className="inputBox">
            <div className="inputBox__field">
                <h1>Weather App</h1>
                <p>Powered by</p>
                <img src="https://cdn.freebiesupply.com/logos/large/2x/mk-2-logo-png-transparent.png" alt="logo"/>
                
                <form>
                <Input placeholder="Enter City Name" onChange={handleChange} value={input}/>
                <br/>
                <Button variant="contained" color="primary" type="Submit" onClick={handleClick}>Search</Button>
                </form>
                <br/>
                <p>Copyrights &copy; 2020 Moghankumar. All Rights Reserved</p>

            </div>       
                 
        </div>
    </div>
    )
}
export default Inputer;
