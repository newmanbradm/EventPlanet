import React from 'react';

const Guest = (props) => {

    console.log(props)

    return (
        <div className='guest'>
            <p>{props.guest.name}</p>
            <p>{props.guest.email}</p>
            <p>{props.guest.phone_number}</p>
            <div className="edit-and-remove-buttons">
                <button>Edit Guest</button>
                &nbsp;
                <button>Remove Guest</button>
            </div>
        </div>
    );
}

export default Guest;