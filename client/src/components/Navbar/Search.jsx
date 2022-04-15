import React from 'react';

export default function Search({ searchByName }) {
  const iconStyle = {left: '16px', position: 'absolute', top: '23%', marginRight: '10px', width: '25px',
    height: '25px'
  }
  
  return (
    <div className="search">
      <lord-icon
        src="https://cdn.lordicon.com/msoeawqm.json"
        trigger="hover"
        colors="primary:#b4b4b4,secondary:#84b74d"
        style={iconStyle}
      ></lord-icon>

      <input
        type="search"
        placeholder="Search..."
        className="search-input"
        name="search"
        onChange={({ target }) => searchByName(target.value)}
      />
    </div>
  );
}
