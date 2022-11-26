import React from 'react';
import lemon from '../../../images/MASK_GROUP/lemon.svg'
import nootris from '../../../images/MASK_GROUP/nootris.svg'
import ginger from '../../../images/MASK_GROUP/ginger.svg'


const MaskGroup = () => {
    return ( 
        <div className='mask-group'>
            <img src={lemon} alt="lemon" className='mask-group-lemon' />
            <img src={nootris} alt="nootris" className='mask-group-nootris' />
            <img src={ginger} alt="nootris" className='mask-group-ginger' />
        </div>
     );
}
 
export default MaskGroup;