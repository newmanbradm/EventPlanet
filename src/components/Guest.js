import React from 'react';

const Guest = (props) => {

    return (
        <div className='guest'>
            <p>{props.guest.name}</p>
            <p>{props.guest.email}</p>
            <p>{props.guest.phone_number}</p>
            <div className="edit-and-remove-buttons">
                <button onClick={() => props.editGuest(props.guest)}>Edit Guest</button>
                &nbsp;
                <button onClick={() => props.deleteGuest(props.guest.id)}>Remove Guest</button>
            </div>
        </div>
    );
}

export default Guest;