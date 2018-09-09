import React, { Component } from 'react';
import Comment from './Comment'
import { connect } from 'react-redux'

class Post extends Component {

    renderComments = () => {
        let commentArray = this.props.currentEvent.comments.filter(comment => comment.post_id === this.props.post.id)
        if (commentArray.length !== 0) {
            return commentArray.map(comment => <Comment key={comment.id} comment={comment} />)
        } else {
            return <h3>This post does not have any comments at this time.</h3>
        }
        // if (this.props.post.comments.length !== 0) {
        //     return this.props.post.comments.map(comment => <Comment key={comment.id} comment={comment} />)
        // } else {
        //     return <h4>This post does not have any comments at this time.</h4>
        // }
    }

    render() {
        return (
            <React.Fragment>
            <div className='post-area'>
                <div className="post">
                    <img src={this.props.post.image_url} alt="post"/>
                    {this.renderComments()}
                </div>
            </div>
            <br />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.currentEvent.currentEvent
    }
}



export default connect(mapStateToProps)(Post);