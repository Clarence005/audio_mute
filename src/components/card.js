import React from 'react';

const Card = ({ title, children }) => (
  <div
    style={{
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '13px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    }}
  >
    {title && (
      <h2 style={{ marginBottom: '15px', color: '#333', fontSize: '1.2rem' }}>
        {title}
      </h2>
    )}
    {children}
  </div>
);

export default Card;
