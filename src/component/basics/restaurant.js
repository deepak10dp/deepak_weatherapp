import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import Menucard from './Menucard'
import Navbar from './navbar'


const uniqueList=[
    ...new Set(
        Menu.map((curElem)=>{
            return curElem.category;
        })
    ),"All"
]
console.log(uniqueList)


const Restaurant = () => {
    const [menuData,setMenuData]=React.useState(Menu)
    const [menuList,setMenuList]=useState(uniqueList)
    const filterItem =(category)=>{
        if (category==='All'){
            setMenuData(Menu);
            return
        }
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category === category
        })
        setMenuData(updatedList)
    }
    return(
    <div>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <Menucard deepa={menuData}/>
    </div>
    )
    
}

export default Restaurant;

