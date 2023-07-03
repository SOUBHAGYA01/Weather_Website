import React from 'react'
import './style.css'

const Third = ({data}) => {
  return (
    <div className="lower-half">
    <div className="feels">
       <p className='uppercase'>
       {
            data.main ? <div>{data.main.feels_like}°F</div>:null
     }      
           
           </p>
       <p>Feels Like</p>
    </div>
    <div className="humid">
       <p className='uppercase'>

       {
            data.main ? <div>{data.main.humidity}%</div>:null
     }      

       </p>
       <p>Humidity</p>
    </div>

    <div className="speed">
        <p className='uppercase'>

        {
            data.wind ? <div>{data.wind.speed.toFixed()}MPH</div>:null
     }      


        </p>
        <p>Wind Speed</p>
    </div>

  </div>
  )
}

export default Third