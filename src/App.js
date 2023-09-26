
// this page is used to display things on website then we export on index.js and then to index.html 
// everything in react js is components
// render means to show


// react has 3 things in components import react arrow function and export
// in arrow function we have to write our html file in main div like section div or we have react.fragment for react or we can simply use <></
// in react class is already reserved so we use className
// in jsx every file must be closed even the images tag
import React from 'react'

import Restaurant from './component/basics/restaurant'
import Usestate from './component/Hooks/usestate';
import UseEffect from './component/Hooks/UseEffect';
import UseReducer from './component/Hooks/UseReducer';
import Temp from './component/weather/Temp';

const App = () => {
  return (
    <div>
      {/* <Restaurant />; */}
      {/* <Usestate />; */}
      {/* <UseEffect /> */}
      {/* <UseReducer /> */}
      <Temp />
    </div>
  )
}

export default App

