import React from 'react';
import Cards from './Cards';
import MainTitle from './MainTitle';
import OrderButton from './OrderButton';
import Price from './Price';

import './style.css'

const Main = () => {
    return ( 
        <div className='main-wrapper'>
            <MainTitle />
            <Price />
            <Cards />
            <OrderButton />
        </div>
     );
}
 
export default Main;