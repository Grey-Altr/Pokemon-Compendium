import React from 'react';

export default function Query({ query, setQuery, handleButtonClick }) {
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
}
