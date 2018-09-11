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
    }

    render() {
        return (
            <React.Fragment>
            <div className='post-area'>
                <div className="post">
                    <img src={this.props.post.image_url} alt="post"/>
                    {this.renderComments()}
                    <button>Write Comment</button>
                    &nbsp;
                    <button onClick={() => this.props.deletePost(this.props.post.id)}>Remove Post</button>
                </div>
            </div>
            <br />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.event.currentEvent
    }
}



export default connect(mapStateToProps)(Post);