import React from 'react';
import Wrapper from '../common/Wrapper';
import BasketButton from './BasketButton';
import Logo from './Logo';
import NavItems from './NavItems';

import './style.css'

const Navbar = () => {
    return ( 
        <nav>
            <Wrapper>
                <div className='flex-row-just-beet-align-center'>
                    <Logo />
                    <NavItems />
                    <BasketButton />
                </div>
            </Wrapper>
        </nav>
     );
}
 
export default Navbar;