import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

class PostList extends Component {

    renderPosts = () => {
        if (this.props.currentEvent.posts.length !== 0) {
            return this.props.currentEvent.posts.map(post => <Post key={post.id} post={post}/>)
        } else {
            return <h1>This event does not have any posts at this time.</h1>
        }
    }
    
    render() {
        return (
            this.props.currentEvent.id ?
            <div className="content">
                <h1>{`Inspiration for ${this.props.currentEvent.title}`}</h1>
                {this.renderPosts()}
            </div>
            :
            <div className="content">
                <h1>Please Select An Event</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentEvent: state.currentEvent.currentEvent
    }
}

export default connect(mapStateToProps)(PostList);
