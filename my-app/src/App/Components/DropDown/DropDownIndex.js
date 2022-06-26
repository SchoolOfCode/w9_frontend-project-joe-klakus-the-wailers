import React from 'react';

function DropDown() {
  return (
  <div>
  <div className="dropdown">
  <button className="dropbtn drop-down-styling">Filters</button>
  <div className="dropdown-content">
    <p>Date (Start Time)</p>
    <p>Date (End Time)</p>
    <p>Organizer</p>
    <p>Distance</p>
    <p>Type of Event</p>
  </div>
</div>
</div>
  )
}
export default DropDown;