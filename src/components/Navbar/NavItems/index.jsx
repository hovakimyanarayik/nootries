import React from 'react';


const navItemsList = [
    {
        title: 'FAQ',
        path: '#1'
    },
    {
        title: 'Оплата и доставка',
        path: '#2'
    },
    {
        title: 'Возврат',
        path: '#3'
    },
    {
        title: 'Исследования',
        path: '#4'
    },
    {
        title: 'Личный кабинет',
        path: '#5'
    },
    {
        title: '8 8 (800) 600-09-90 ',
        path: '#6'
    }
]

const NavItems = () => {

    return ( 
        <ul className='nav-items-list flex-row-just-beet-align-center'>
            {navItemsList.map(item => (
                <li key={item.path}>
                    <a href={item.path}>{item.title}</a>
                </li>
            ))}
        </ul>
     );
}
 
export default NavItems;