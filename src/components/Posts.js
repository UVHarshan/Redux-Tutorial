import React, { Component } from 'react'

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    // This is a life cycle method
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}))
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h1> {post.title} </h1>
                <p> {post.body}</p>
            </div>
        ))

        return (
            <div>
                <h1> Posts </h1>
                {postItems}
           </div>
        )
    }
}

export default Posts;