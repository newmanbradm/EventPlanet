import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { withRouter } from 'react-router-dom';
import { setEventsAction, setCurrentEventAction } from '../actions';

const eventsUrl = "http://localhost:3000/api/v1/events"

class PostList extends Component {

    renderPosts = () => {
        if (this.props.currentEvent.posts.length !== 0) {
            return this.props.currentEvent.posts.map(post => <Post key={post.id} post={post} deletePost={this.deletePost} />)
        } else {
            return <h1>This event does not have any posts at this time.</h1>
        }
    }

    handleClick = () => {
        this.props.history.push("/add-post")
    }

    deletePost = (postId) => {
        const currentEventUrl = `http://localhost:3000/api/v1/events/${this.props.currentEvent.id}`
        let deleteUrl = `http://localhost:3000/api/v1/posts/${postId}`
        return fetch(deleteUrl, {method: "DELETE"}).then(() => fetch(currentEventUrl)).then(resp => resp.json()).then(data => this.props.setCurrentEvent(data)).then(() => fetch(eventsUrl)).then(resp => resp.json()).then(data => this.props.setEvents(data))
    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>{`Inspiration for ${this.props.currentEvent.title}`}</h1>
                <button onClick={this.handleClick}>Add Post</button>
                <br />
                <br />
                <div className="post-board">
                    {this.renderPosts()}
                </div>
            </div>
            :
            <div className="content">
                <h1>Please Select Or Add An Event</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.event.currentEvent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setEvents: (data) => dispatch(setEventsAction(data)),
        setCurrentEvent: (obj) => dispatch(setCurrentEventAction(obj))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));
