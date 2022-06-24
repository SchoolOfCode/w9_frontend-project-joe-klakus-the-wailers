import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

function DropDown() {
  return (
//     <div>
//     <div className="dropdown">
//   <button className="dropbtn">Filters</button>
//   <div className="dropdown-content">
//     <a href="#">Date (Start Time)</a>
//     <a href="#">Date (End Time)</a>
//     <a href="#">Organizer</a>
//     <a href="#">Distance</a>
//     <a href="#">Type of Event</a>
//   </div>
// </div>
// </div>
    <div class="dropdown" mdbDropdown>
    <MDBDropdown>
      <MDBDropdownToggle className="drop-down-styling">Filter</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink  className="drop-down-styling" href="#">Date (Start Time)</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink className="drop-down-styling" href="#">Date (End Time)</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink className="drop-down-styling" href="#">Organizer / Host</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink className="drop-down-styling" href="#">Distance</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink className="drop-down-styling" href="#">Type of Event</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </div>
  );
}
export default DropDown;