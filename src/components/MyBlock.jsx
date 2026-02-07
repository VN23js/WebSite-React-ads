// src/components/MyBlock.jsx
import React from 'react';

export default function MyBlock() {
  return (
    <div
      style={{
        padding: '1rem',
        margin: '1rem 0',
        backgroundColor: '#f2f2f2',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      <h3>Блок контента</h3>
      <p>Это пример блока на главной странице</p>
    </div>
  );
}
