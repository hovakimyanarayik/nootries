import React from 'react';
import CardItem from './components/CardItem';
import ginger from '../../../images/MASK_GROUP/ginger.svg'
import nootrisRotated from '../../../images/MASK_GROUP/nootrisRotated.svg'
import vorus from '../../../images/MASK_GROUP/vorus.svg'

const Cards = () => {
    return ( 
        <div className='cards-wrapper'>
            <CardItem 
                src={ginger} 
                imgClassName='image-small'
                heading="Содержит" 
                headingClassName='heading-small' 
                content='имбирь'
                contentClassName='text-orange'
            />
            <CardItem 
                src={nootrisRotated} 
                imgClassName='image-large'
                heading="+ Бесплатная доставка" 
                headingClassName='heading-large' 
                content='Специяльная цена'
                contentClassName='content-large text-orange'
            />
            <CardItem 
                src={vorus} 
                imgClassName='image-small'
                heading="Нейтрализирует" 
                headingClassName='heading-small' 
                content='вирусы'
                contentClassName='text-orange'
            />
        </div>
     );
}
 
export default Cards;