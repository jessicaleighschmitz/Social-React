import React from "react";
import Home from './Home';
import Notifications from './Notifications';
import Messages from './Messages';
import SearchBar from './SearchBar';
import TweetButton from './TweetButton';

function Header(){
  return (
    <div className="header">
      <Home/>
      <Notifications/>
      <Messages/>
      <SearchBar/>
      <TweetButton/>
    </div>
  );
}

export default Header;
