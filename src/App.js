import React,{useState} from 'react';
import './App.css';
import Inputer from "./input";
import axios from "axios";
import Result from "./Result";

function App() {
  const[input,setInput]=useState("");
  const[temp,setTemp]=useState("");
  const[description,setDescription]=useState("");
  const[icon,setIcon]=useState("");

  const findweather=async()=>{

    const apiKey = "987dea334df57e0f7a37b24f88e89279";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + apiKey + "&units=" + unit;
    const response=await axios.get(url);

    console.log(response);

    const temp=await response.data.main.temp;
    const description=await response.data.weather[0].description;
    const icon=await response.data.weather[0].icon;
    const imageURL="https://openweathermap.org/img/wn/" + icon + "@2x.png"

    console.log(temp,description,imageURL);

    setTemp(temp);
    setDescription(description);
    setIcon(imageURL);
    setInput("");

  }

  return (
    
    <div className="App">
      {temp==="" ?
      <Inputer
         input={input}
         setInput={setInput}  findweather={findweather}       
      /> :
      <Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>
        }
      </div>
  
  
  );
}

export default App;
