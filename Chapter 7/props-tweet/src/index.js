import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar address={tweet.gravatar}/>
      <div className="content">
        <Author author={tweet.author}/>
        <Time timestamp={tweet.timestamp}/>
        <Message message={tweet.message}/>
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}

function Avatar({address}) {
  const uri = `https://www.gravatar.com/${address}`
  return (
    <img className="avatar" src={uri} alt="avatar" />
    )
}

function Message({message}) {
  return (
    <div className="message">{message}</div>
  )
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  )
}

const Time = ({timestamp}) => <span className="time">{moment(timestamp).fromNow()}</span>

const ReplyButton = () => <i className="fa fa-reply reply-button" />

const getRetweetCount = (count) => {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>
  } else {
    return
  }
}

const RetweetButton = ({count}) => (
  <span className="retweet-button">
    <i className="fa fa-retweet retweet-button" />
    {getRetweetCount(count)}
  </span>
)

const LikeButton = ({count}) => (
    <span className="like-button">
      <i className="fa fa-heart like-button" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  )

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button" />

const testTweet = {
  message: 'My first tweet!',
  author: {
    handle: '@ashikvar',
    name: 'Ashik Varghese'
  },
  gravatar: 'avatar/nothing',
  likes: 2,
  retweets: 1,
  timestamp: '2022-07-06 21:21:21'
}

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'))