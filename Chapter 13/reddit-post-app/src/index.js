import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class ErrorCatcher extends React.Component {
  state = {
    error: null
  }

  componentDidCatch(error, info) {
    this.setState({ error: true, info: info.componentStack })
  }

  render() {
    if (this.state.error) {
      return <div>An error occured: {this.state.info}</div>
    }

    return this.props.children
  }
}

class Reddit extends React.Component {
  state = {
    isLoaded: false,
    posts: []
  }

  componentDidMount() {
    axios
      .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
      .then((res) => {
          const posts = res.data.data.children.map((obj) => obj.data)
          this.setState({isLoaded: true, posts})
      })
  }

  render() {
    const { posts } = this.state
    if (this.state.isLoaded === false) {
      return <div>Loading Data...</div>
    }

    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <ErrorCatcher>
    <Reddit subreddit="reactjs" />
  </ErrorCatcher>,
  document.querySelector('#root'))