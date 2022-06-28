// import { getAllByTestId, render, screen, fireEvent } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login/";

import FormInput from "../InputTypeText/Input-Index";
import GreenButton from "../Button/GreenButtonIndex";
import OrangeButton from "../Button/OrangeButtonIndex";
import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "../../jwt-decode.js";
import { useNavigate } from "react-router";


test("Checking if the app logo is rendered", () =>{

render(<Login/>);
screen.debug(); 
const actual = screen.getByRole("img")
const expected = ("img");
expect(actual).toBe(expected);
})



