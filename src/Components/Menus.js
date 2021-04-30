import React, { useState } from 'react';
import Breakfast from './breakfastMenu';
import Lunch from './lunchMenu';

const Menus = () => {
    const [currentMenu, setCurrentMenu ] = useState(Breakfast);

    return (
        <div>
            <div>
                <div>orange line</div>
                <h3>Select a menu</h3>
                <div>orange line</div>
            </div>
            <p>Breakfast</p>
            <p>Lunch</p>
            <div>
                {currentMenu[0].menuTitle}
                <div>orange line</div>
                {/* menus titles */}
                <div>
                     { currentMenu.[0].subMenus.map(item=> {
                         return <p>{item.subMenuTitle}</p>

                     })}
                </div>
                <div>
                    
                    <div>
                        <h3>{currentMenu[0].subMenus[0].subMenuTitle}</h3>
                        <h4>{currentMenu[0].subMenus[0].featuredTitle}</h4>
                        <h4>{currentMenu[0].subMenus[0].featuredDescription}</h4>
                        <p>                        <h4>{currentMenu[0].subMenus[0].featuredPrice}</h4></p>
                    </div>
                    {/* others */}
                    <div>
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