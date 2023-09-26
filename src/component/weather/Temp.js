import React, { useEffect, useState } from "react";
import "./style.css";
import Tempcard from "./Tempcard";

<link rel="stylesheet" href="weather-icons-wind.css" />;

const Temp = () => {
  const [searchvalue, setSearchvalue] = React.useState("pune");
  const [tempinfo,setTempinfo]=useState("")
  const getweatherinfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=3edd423176bdb7858da2328308207777`;
      const res =await fetch(url);
      const data=await res.json();
      const {name}=data
      const {temp}=data.main
      const {country}=data.sys

      const mynewweatherinfo={
        name,
        temp,      //we created our own object  and then we pass from setTempinfo
        country,
      }
      setTempinfo(mynewweatherinfo)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getweatherinfo(); // we have use this useeffect so that first time when we land on page by default therre is any city data tob showing on page
  }, []);
  return (
    <div>
      <div className="container-search">
        <div className="search">
          <input
            className="sear"
            type="search"
            placeholder="search"
            value={searchvalue}
            onChange={(e) => {
              setSearchvalue(e.target.value); //we are storing the value here user want to search
            }}
          />

          <div className="button">
            <button className="butt" type="button" onClick={getweatherinfo}>
              search
            </button>
          </div>
        </div>
      </div>
      <Tempcard tempinfo={tempinfo}/>
    </div>
  );
};

export default Temp;
