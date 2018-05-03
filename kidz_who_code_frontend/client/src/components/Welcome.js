import React from 'react';
import DownArrow from "./public/downarrow.png";
import divvy from './public/divvy.svg';
import InfoBox from './InfoBox';
import './Welcome.css';

const Welcome = (props) => {
  return(
    <div id="welcome">
      <h1>This is the welcome text</h1>
      <section className="divvy">
      <img id="divvy" src={divvy} width="200" height="200" alt="divvy the alien"/>

      <form method="get">
      <p id="speechbubble">This is the text to go in the speech bubble. What's your name?</p>
      <input type="text" name="name" />
      <input type="submit" name="submitbutton" value="Let's get Divvy home!" />
    </form>
      </section>
      {/* <InfoBox text='This is where all the words in the info box are going to go' /> */}
    <img src={DownArrow} width="200" height="200" alt="this should be a down arrow" />
    </div>
  )
}

export default Welcome;