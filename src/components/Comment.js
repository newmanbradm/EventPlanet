import React, { Component } from 'react';

class Comment extends Component {

    render() {
        return (
            <div className='comment'>
                <p>{this.props.comment.message}</p>
                &nbsp;
                <button onClick={() => this.props.editComment(this.props.comment)}>Edit</button>
                &nbsp;
                <button onClick={() => this.props.deleteComment(this.props.comment.id)}>Remove</button>
            </div>
        );
    }
}

export default Comment;