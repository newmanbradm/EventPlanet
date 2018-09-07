import React from 'react';

const Supply = (props) => {

    console.log(props)

    return (
        <div className='supply'>
            <p>{props.supply.name}</p>
            <p>{`$${props.supply.price}`}</p>
            <a href={`${props.supply.store_url}`} target="_blank">{props.supply.store_url.slice(0, 50) + '...'}</a>
        </div>
    );
}

export default Supply;