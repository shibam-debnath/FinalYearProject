import React, { useState } from 'react';
import axios from 'axios';

const Generate = () => {
    const [text, setText] = useState('');
    const [voice, setVoice] = useState('default');
    const [audio, setAudio] = useState('');
  
    const generateAudio = async () => {
      try {
        const response = await axios.post('http://localhost:5000/generate_audio', {
          text,
          voice,
        });
  
        setAudio(response.data.audio);
      } catch (error) {
        console.error('Error generating audio:', error);
      }
    };
  
    return (
      <div>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <select value={voice} onChange={(e) => setVoice(e.target.value)}>
          <option value="default">Default</option>
          <option value="Amy">Amy</option>
        </select>
        <button onClick={generateAudio}>Generate Audio</button>
        {audio && <audio controls src={`data:audio/wav;base64,${audio}`} />}
      </div>
    );
}

export default Generate