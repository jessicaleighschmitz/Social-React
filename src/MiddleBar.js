import React from "react";
import TweetBlock from './TweetBlock';

function MiddleBar(){


  const array = [
    {
      'userName': 'Henry',
      'tweetText': 'Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Headless Nick now string them together'
    },
    {
      'userName': 'Bobbly',
      'tweetText': 'Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Headless Nick now string them together'
    },
    {
      'userName': 'Schmerald',
      'tweetText': 'Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Headless Nick now string them together'
    }
  ];

return(
<div className="middleBar">
{
  array.map((propBlock) =>
  <TweetBlock
  userName={propBlock.userName}
  tweetText={propBlock.tweetText} />
)
}
</div>

)};



export default MiddleBar;
