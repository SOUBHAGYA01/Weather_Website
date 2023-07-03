import React from 'react'
import axios from 'axios'
import {MYapiKey} from './Credential'
import { useState } from 'react'
import './style.css'
import Third from './Third'




const First = () => {
    const [cityName, setCityName]= useState('');
    const [data,setData]=useState({});
    const Url1=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${MYapiKey}  ` 

 
    const submitSearch = async(e) =>{

      
        console.log(cityName)
if(cityName==undefined){
    return;
}

        if(e.key=='Enter'){
           
            let response =await axios.get(Url1);
            setData(response.data);
         console.log(response.data);

         console.log(response.statusText)
                if(data.statusText=='Not Found'){
                  return ;

                }

             setCityName('')
        }
      
      }

  return (
   
<>

<div className="app">

<div className='heading'>
Welcome to weather website
</div>


    <div className="serach">
      <input type="text" value={cityName} onChange={event=>setCityName(event.target.value)} 
      onKeyPress={submitSearch}
      placeholder='Enter city name'      
      name="" id="" />

    </div>

    <div className="container">
       <div className="upper-half">
        <div className="cityname">
            
             {data.name}
              
        </div>
       <div className="temper">
          {
                 data.main ? <div>{data.main.temp}°F</div>:null
          }              
       </div>
       <div className="decs">
       {
                 data.weather ? <div>{data.weather[0].main}</div>:null
          }      
       </div>   
       </div>

       {data.name!=undefined && <Third data={data}/>}


    </div>
</div>

</>

  )
}

export default First