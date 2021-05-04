import React, { useState } from 'react';
import Breakfast from './breakfastMenu';
import Lunch from './lunchMenu';
import styled from 'styled-components';

const Menus = () => {
    const [currentMenu, setCurrentMenu ] = useState(Breakfast);
    // initial state set to the 0 index (array)
    const [ subMenu, setSubmenu ] = useState(currentMenu[0].subMenus);
    // Index used for specific subMenu
    const [ subIndex, setSubIndex ] = useState(0);

    // This function changes state of the submenu
    
   const subMenuSetter = (e) => {
       setSubmenu(e.target.innerText)
   }
   // Need to find the correct array to map over with this value
   const findIndexOfSubMenu = () => {
       setSubIndex(subMenu.findIndex(cv => cv.subMenuTitle === subMenu));
   }

    return (
        <div>
            <button onClick={findIndexOfSubMenu}>index test</button>
            <div>
                <Header>
                    <HorizontalLine></HorizontalLine>
                    <HeaderTitle>Select a menu</HeaderTitle>
                    <HorizontalLine></HorizontalLine>
                </Header>
            <ButtonHolder>
                <SelectButton  
                    onClick={()=> {setCurrentMenu(Breakfast)}}>Breakfast</SelectButton>
                <SelectButton  
                    onClick={()=> {setCurrentMenu(Lunch);}}>Lunch</SelectButton>
            </ButtonHolder>
            </div>
            <div>
                {/* menus titles */}
                <div style={{backgroundColor: "yellow"}}>
                     {currentMenu[0].subMenus.map(item=> {
                         return <p onClick={subMenuSetter}>{item.subMenuTitle}</p>
                     })}
                </div>
                <div style={{backgroundColor: "orange"}}>
                    <h3>{currentMenu[0].menuTitle}</h3>
                </div>

                <div>
                    
                    <div style={{backgroundColor: "blue"}}>
                        <h3>{currentMenu[0].subMenus[0].subMenuTitle}</h3>
                        <h4>{currentMenu[0].subMenus[0].featuredTitle}</h4>
                        <h4>{currentMenu[0].subMenus[0].featuredDescription}</h4>
                        <p>                        <h4>{currentMenu[0].subMenus[0].featuredPrice}</h4></p>
                    </div>
                    {/* others */}
                    <div style={{backgroundColor: "green"}}>
                        {currentMenu[0].subMenus[0].menuItems.map(item => {
                            return<div> 
                                    <p>{item.itemTitle}</p>
                                    <p>{item.itemDescription}</p>
                                    <p>{item.itemPrice}</p>
                            </div>
                        })}
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Menus;

const Header = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderTitle = styled.h3`
    font-size: 2.4rem;
    margin-bottom: 4px;
    padding: 1.2rem;

`
const HorizontalLine = styled.div`
    background-color: #F78B22;
    height: 2px;
    width: 100px;
`

const ButtonHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SelectButton = styled.button`
    border: none;
    background: none;
    font-size: 1.2rem;
    margin: 0 1.5rem;
    cursor: pointer;
    &: hover {
        transition: 0.2s;
        color: #F78B22;
    }
`