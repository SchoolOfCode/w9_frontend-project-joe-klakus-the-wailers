// import { getAllByTestId, render, screen, fireEvent } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import Login from "../Login/";


test("Checking if the app logo is rendered", () =>{

render(<Login/>);
screen.debug(); 

})



