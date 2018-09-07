import React from 'react';

const Comment = (props) => {

    console.log(props)

    return (
        <div className='comment'>
            <p>{props.comment.message}</p>
        </div>
    );
}

export default Comment;