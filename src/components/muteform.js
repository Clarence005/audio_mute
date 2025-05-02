import React, { useState } from 'react';
import SegmentInput from './segmentinput';
import './muteform.css';

const MuteForm = ({ setMutedUrl, setIsLoading }) => {
  const [segments, setSegments] = useState([{ startTime: '', endTime: '' }]);

  const addSegment = () => {
    setSegments([...segments, { startTime: '', endTime: '' }]);
  };

  const handleChange = (i, field, value) => {
    const updated = [...segments];
    updated[i][field] = value;
    setSegments(updated);
  };

  const submitSegments = async () => {
    setIsLoading(true);
    const response = await fetch('https://audiomute-server.onrender.com/mute-audio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ segments }),
    });
    const data = await response.json();
    setMutedUrl(null);
    setTimeout(() => {
      setMutedUrl("https://audiomute-server.onrender.com/"+data.mutedUrl);
    }, 50);
    setIsLoading(false);
  };

  return (
    <div className="mute-form">
      <h3 className="mute-title">Select Mute Segments</h3>
      {segments.map((seg, i) => (
        <SegmentInput key={i} segment={seg} index={i} handleChange={handleChange} />
      ))}

      <div className="button-group">
        <button className="button add-button" onClick={addSegment}>
          Add Segment
        </button>
        <button className="button mute-button" onClick={submitSegments}>
          Mute Audio
        </button>
      </div>
    </div>
  );
};

export default MuteForm;
