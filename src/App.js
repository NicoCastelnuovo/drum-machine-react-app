import { useState } from 'react';
import SinglePad from './Components/SinglePad';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('Built by NicoCastel');
  const [volume, setVolume] = useState(1);
  
  const pads = 
  [
    'q', 'w', 'e',
    'a', 's', 'd',
    'z', 'x', 'c'
  ].map((item, i) => {
    const src = new Audio(`./Sounds/sound-${i}.wav`);
    src.volume = volume;
    return (
      <SinglePad
        key={`pad_${i}`}
        letter={item}
        src={src}
        updateDisplay={setDisplay} />
    )
  })
  
  return (
    <div id="drum-machine">
      <h2 id="display">{display}</h2>
      <div id="pad-board">
        {pads}
      </div>
      <label 
        id="volume-label"
        htmlFor="volume">Volume {volume}</label>
      <input
        id="volume-input"
        name="volume"
        type="range" min="0" max="1" step="0.1"
        onChange={(e) => setVolume(e.target.value)} />
    </div>
  )
}

export default App;
