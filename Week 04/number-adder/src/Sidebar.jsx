import React from 'react';

function Sidebar({ total, totalMessage, additionsCount, subtractionsCount, history }) {

  return (
    <div className="sidebar">
      <h3>Result</h3>
      <p>Total: {total}</p>
      <p>{totalMessage}</p> 
      <h3>History</h3>
      <p>Total additions: {additionsCount}</p>
      <p>Total subtractions: {subtractionsCount}</p>
      <ul>
        {
        	history.map((entry, index) => (
	          <li key={index}>{entry}</li>
	        ))
        }
      </ul>
    </div>
  );
}

export default Sidebar;
