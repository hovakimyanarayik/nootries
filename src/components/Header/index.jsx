import React from 'react';
import Wrapper from '../common/Wrapper';
import Description from './Description';
import Extantion from './Extantion';
import MaskGroup from './MaskGroup';
import PageTitle from './PageTitle';

import './style.css'


const Header = () => {
    return ( 
        <div className="header-wrapper">
            <Wrapper>
                <PageTitle />
                <Description />
                <Extantion />
                <MaskGroup />
            </Wrapper>
        </div>
     );
}
 
export default Header;