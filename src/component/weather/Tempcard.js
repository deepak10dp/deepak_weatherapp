import React from 'react'

const Tempcard = ({tempinfo}) => {
    const {
        
        name,
        temp,      //we created our own object  and then we pass from setTempinfo
        country,
      
    }=tempinfo
  return (
    <div>
      <div className="art">
        <div className="widget">
          hello
          <div className="weathericon">
            <img src="./png/cloudy.png" alt="" />
          </div>
          <div className="temp">
            <div className="temp-val">{temp}° {name} {country} <p>
                <i className="wi wi-night-sleet"></i>
            </p></div>
            {/* <div className="weathercondition">sunny</div>
            <div className="place">{name}</div>
            <div className="country">{country}</div> */}
            
            
              <div className="date">{new Date().toLocaleString()}</div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tempcard
