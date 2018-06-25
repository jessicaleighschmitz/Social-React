import React from "react";

function TweetBlock(props){

  return(
    <div className="tweet-block">

      <img className="user-other" src="https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9daa0d1e9b6c3f76c452c9e1f28516f7&auto=format&fit=crop&w=1000&q=80" alt=""/>
      <h3>{props.userName}</h3>
      <p className="user-text">{props.tweetText}</p>
  </div>
  );
}

export default TweetBlock;
