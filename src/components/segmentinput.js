import React from 'react';

const SegmentInput = ({ segment, index, handleChange, removeSegment }) => (
  <div className="segment-input" style={{ display: 'flex', gap: '15px', marginBottom: '12px', flexWrap: 'wrap' }}>
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
        minWidth: '130px',
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
        minWidth: '130px',
      }}
    />
    {index > 0 && (
      <button
        className="remove-segment-btn"
        onClick={() => removeSegment(index)}
        style={{
          backgroundColor: '#dc3545',
          color: '#fff',
          padding: '10px 15px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          transition: '0.3s',
        }}
      >
        Remove
      </button>
    )}
  </div>
);

export default SegmentInput;
