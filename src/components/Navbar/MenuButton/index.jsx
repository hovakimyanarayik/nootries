import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti'

const MenuButton = ({onClick}) => {

    return (
        <button className='menu-button' onClick={onClick}>
            <TiThMenuOutline style={{fontSize: '25px'}} />
        </button>
     );
}
 
export default MenuButton;