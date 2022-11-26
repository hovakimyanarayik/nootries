import React from 'react';
import { BsBasket3 } from 'react-icons/bs'
 
const BasketButton = () => {
    return ( 
        <button className='basket-button'>
            <BsBasket3 style={{fontSize: '30px'}} />
        </button>
     );
}
 
export default BasketButton;