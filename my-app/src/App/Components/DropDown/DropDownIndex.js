import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

function DropDown() {
  return (
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