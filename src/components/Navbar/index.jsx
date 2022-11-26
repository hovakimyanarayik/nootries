import React, { useState } from 'react';
import Wrapper from '../common/Wrapper';
import BasketButton from './BasketButton';
import Logo from './Logo';
import MenuButton from './MenuButton';
import NavItems from './NavItems';

import './style.css'

function useResizeObserver() {
    const [currentWidth, setCurrentWidth] = useState(document.body.offsetWidth)
    const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entrie => {
            setCurrentWidth(entrie.contentRect.width)
        })
    })
    resizeObserver.observe(document.body)
    return currentWidth
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const currentWidth = useResizeObserver()

    const toggleMenu = () => setIsOpen(!isOpen)
    return ( 
        <nav >
            <Wrapper>
                <div className='flex-row-just-beet-align-center'>
                    <Logo />
                    {currentWidth > 1024 && <NavItems />}
                    <div>
                        {currentWidth <= 1024 && <MenuButton onClick={toggleMenu} />}
                        <BasketButton />
                    </div>
                </div>
                {isOpen && currentWidth <= 1024 && <NavItems horizontally={false} />}
            </Wrapper>
        </nav>
     );
}

export default Navbar;