import React from 'react';

const Supply = (props) => {

    return (
        <div className='supply'>
            <p>{props.supply.name}</p>
            <p>{`$${props.supply.price}`}</p>
            <a href={`${props.supply.store_url}`} target="_blank">{props.supply.store_url.slice(0, 50) + '...'}</a>
            <div className="edit-and-remove-buttons">
                <button onClick={() => props.editSupply(props.supply)}>Edit Supply</button>
                &nbsp;
                <button onClick={() => props.deleteSupply(props.supply.id)}>Remove Supply</button>
            </div>
        </div>
    );
}

export default Supply;