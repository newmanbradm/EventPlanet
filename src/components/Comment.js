import React from 'react';

const Comment = (props) => {

    return (
        <div className='comment'>
            <p>{props.comment.message}</p>
            &nbsp;
            <button>Edit</button>
            &nbsp;
            <button>Remove</button>
        </div>
    );
}

export default Comment;