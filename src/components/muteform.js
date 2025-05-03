import React, { useState } from 'react';
import SegmentInput from './segmentinput';
import './muteform.css';

const MuteForm = ({ setMutedUrl, setIsLoading }) => {
  const [segments, setSegments] = useState([{ startTime: '', endTime: '' }]);
  const [error, setError] = useState('');

  const addSegment = () => {
    setSegments([...segments, { startTime: '', endTime: '' }]);
    setError(''); // Clear error on add
  };

  const handleChange = (i, field, value) => {
    const updated = [...segments];
    updated[i][field] = value;
    setSegments(updated);
    setError(''); // Clear error on change
  };

  const removeSegment = (index) => {
    const updated = [...segments];
    updated.splice(index, 1);
    setSegments(updated);
    setError('');
  };

  const isValidSegments = () => {
    for (let seg of segments) {
      const start = Number(seg.startTime);
      const end = Number(seg.endTime);

      if (
        seg.startTime === '' ||
        seg.endTime === '' ||
        isNaN(start) ||
        isNaN(end)
      ) {
        setError('Please enter valid numbers for all start and end times.');
        return false;
      }
      if (start >= end) {
        setError('Start time must be less than end time.');
        return false;
      }
      if (start > 120 || end > 120) {
        setError('Start and end times must be 120 seconds or less.');
        return false;
      }
    }
    return true;
  };

  const submitSegments = async () => {
    if (!isValidSegments()) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://audiomute-server.onrender.com/mute-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ segments }),
      });

      const data = await response.json();
      setMutedUrl(null);

      setTimeout(() => {
        setMutedUrl("https://audiomute-server.onrender.com/" + data.mutedUrl);
      }, 50);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="mute-form">
      <h3 className="mute-title">Select Mute Segments</h3>

      {segments.map((seg, i) => (
        <SegmentInput
          key={i}
          segment={seg}
          index={i}
          handleChange={handleChange}
          removeSegment={removeSegment}
        />
      ))}

      <div className="button-group">
        <button className="button add-button" onClick={addSegment}>
          Add Segment
        </button>
        <button className="button mute-button" onClick={submitSegments}>
          Mute Audio
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default MuteForm;
