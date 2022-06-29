import { render, screen, within } from "@testing-library/react";

import EventCard from "./EventCard.js";


test("test if name_of_event, description and button renders properly", () => {
   const value = {name_of_event: 'This is the event Name', description: 'This is a description'}
   
   
   render(<EventCard {...value} />)
                // img={'someValue'}
                // name_of_event={value}
                // cost={'someValue'}
                // description={'someValue'}
                // end_time={'someValue'}
                // event_host={'someValue'}
                // name_of_event_host={'someValue'}
                // events_id={'someValue'}
                // house_number={'someValue'}
                // lat={'someValue'}
                // long={'someValue'}
                // postcode={'someValue'}
                // region={'someValue'}
                // start_time={'someValue'}
                // street_address={'someValue'}
                // town={'someValue'} />);
   expect(screen.getByText('This is the event Name')).toBeDefined();
   expect(screen.getByText('This is a description')).toBeDefined();
   expect(screen.getByRole('button')).toHaveClass('little-green-button');
});
