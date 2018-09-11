import React, { Component } from 'react';
import Comment from './Comment'
import { connect } from 'react-redux'
import { setCurrentPostAction, setCurrentEventAction, setEventsAction, setCurrentCommentAction } from '../actions';
import { withRouter } from 'react-router-dom';

const eventsUrl = "http://localhost:3000/api/v1/events"

class Post extends Component {

    renderComments = () => {
        let commentArray = this.props.currentEvent.comments.filter(comment => comment.post_id === this.props.post.id).sort((a, b) => a.id - b.id)
        if (commentArray.length !== 0) {
            return commentArray.map(comment => <Comment key={comment.id} comment={comment} editComment={this.editComment} deleteComment={this.deleteComment} />)
        } else {
            return <h3>This post does not have any comments at this time.</h3>
        }
    }

    handleClick = (postObj) => {
        this.props.setPost(postObj)
        this.props.history.push("/add-comment")
    }

    editComment = (commentObj) => {
        this.props.setCurrentComment(commentObj)
        this.props.history.push("/edit-comment")
    }

    deleteComment = (commentId) => {
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let deleteUrl = `http://localhost:3000/api/v1/comments/${commentId}`
        return fetch(deleteUrl, {method: "DELETE"}).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data))
    }

    render() {
        return (
            <div className='post-area'>
                <div className="post">
                    <img src={this.props.post.image_url} alt="post"/>
                    {this.renderComments()}
                    <button onClick={() => this.handleClick(this.props.post)}>Write Comment</button>
                    &nbsp;
                    <button onClick={() => this.props.deletePost(this.props.post.id)}>Remove Post</button>
                </div>
                <br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.event.currentEvent,
        currentPost: state.post.currentPost,
        currentComment: state.comment.currentComment
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setPost: (obj) => dispatch(setCurrentPostAction(obj)),
        setCurrentEvent: (data) => dispatch(setCurrentEventAction(data)),
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentComment: (obj) => dispatch(setCurrentCommentAction(obj))
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));