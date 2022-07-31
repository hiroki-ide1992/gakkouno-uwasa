import * as React from 'react';
import { useState, useMemo } from 'react';
import ReactPlayer from 'react-player';


const number = Math.floor(Math.random() * 5);

const Audio: React.FC = () => {

  const [paly, setPlay] = useState<boolean>(false);

  return(
    <>
      <button className={`valueBtn ${paly ? "":"off"}`} onClick={() => setPlay(!paly)}>
        <div className="valueBtn__radius"></div>
      </button>
      <ReactPlayer url={require(`../../music/${number}.mp3`)} playing={paly} volume={0.1} className={'topAudio'} loop/>
    </>
  )
}

export default Audio;