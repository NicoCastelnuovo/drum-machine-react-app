import { useEffect } from "react";

const SinglePad = ({ src, letter, updateDisplay }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  }, []);

  const playAudio = () => {
    src.play();
    updateDisplay(letter);
  }

  const handleKeyDown = (e) => {
    if (e.key === letter) {
      playAudio();
    }
  }

  return (
    <button
      className="drum-pad"
      onClick={playAudio}
      onKeyDown={handleKeyDown}>
        {letter}
    </button>
  )
}

export default SinglePad;