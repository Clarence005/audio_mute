import React from 'react';

const SegmentInput = ({ segment, index, handleChange }) => (
  <div style={{ display: 'flex', gap: '15px', marginBottom: '12px' }}>
    <input
      type="number"
      placeholder="Start time (sec)"
      value={segment.startTime}
      onChange={(e) => handleChange(index, 'startTime', e.target.value)}
      style={{
        flex: 1,
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        outlineColor: '#007bff',
        fontSize: '15px',
      }}
    />
    <input
      type="number"
      placeholder="End time (sec)"
      value={segment.endTime}
      onChange={(e) => handleChange(index, 'endTime', e.target.value)}
      style={{
        flex: 1,
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        outlineColor: '#007bff',
        fontSize: '15px',
      }}
    />
  </div>
);

export default SegmentInput;
