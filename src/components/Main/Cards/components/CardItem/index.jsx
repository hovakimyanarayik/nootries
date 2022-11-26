import React from 'react';


const CardItem = ({src, content, heading, imgClassName, headingClassName, contentClassName }) => {
    return ( 
        <div className='card'>
            <img src={src} alt="image" className={imgClassName} />
            <p className={headingClassName}>{heading}</p>
            <p className={contentClassName} >{content}</p>
        </div>
     );
}
 
export default CardItem;