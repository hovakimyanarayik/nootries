import React from 'react';
import navItemsList from '../navItemsList';

const NavItems = ({ horizontally= true }) => {
// ${horizontally ? 'flex-row-just-beet-align-center' : 'vertical-menu'}
    return ( 
        <ul className={`nav-items-list flex-row-just-beet-align-center`}>
            {navItemsList.map(item => (
                <li key={item.path}>
                    <a href={item.path}>{item.title}</a>
                </li>
            ))}
        </ul>
     );
}
 
export default NavItems;