import React from "react";
import LittleConstructiveButton from "../Button/LittleConstructiveButtonIndex";
import LittleDestructiveButton from "../Button/LittleDestructiveButtonindex";
import FormInput from "../InputTypeText/Input-Index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const ProfilePage = ({ id }) => {
  const [inputValue, setInputValue] = useState([{}]);
  const [isDisabled, setIsDisabled] = useState("none");
  const [isDisabledText, setIsDisabledText] = useState("#e0e0e2");
  const [userDetails, setUserDetails] = useState([]);
  const [createEventError, setCreateEventError] = useState();

  const navigate = useNavigate();
  
  //Event listener for the input field
  function handleChange(event) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  }

  //Toggle function to expand the event cards
  function toggleDisable() {
    isDisabled === "none" ? setIsDisabled(true) : setIsDisabled("none");
    isDisabledText === "#e0e0e2"
      ? setIsDisabledText("var(--primary-blue)")
      : setIsDisabledText("#e0e0e2");
  }
  useEffect(() => {
    //checks to see if the user is logged in ie. has a valid token
    async function fetchUserDetails() {
      const res = await fetch(`http://localhost:5000/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
      });
      //saves the encrypted token to state (bad practice i think needs to be changed later)
      const response = await res.json();
      setUserDetails(response);
    }
    //runs the function
    fetchUserDetails();
  }, []);

  //Work in progress for the profile page to get the users details to be able to be changed TODO
  async function submitUser() {
    (async () => {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: inputValue.first_name,
          last_name: inputValue.last_name,
          email: inputValue.email,
          password: inputValue.password,
          house_number: inputValue.house_number,
          street_address: inputValue.street_address,
          town: inputValue.town,
          region: inputValue.region,
          postcode: inputValue.postcode,
        }),
      });
      const content = await response.json();
      if (content.error) {
        setCreateEventError(content.error);
        return;
      } else if (content.Success === true) {
        navigate("/");
      }
    })();
  }
  //logs the user out (Deletes the token)
  async function deleteToken() {
    const res = await fetch("http://localhost:5000/refresh_token", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
    });
    navigate("/");
    window.location.reload(false);
    return await res.json();
  }
  return (
    <div>
      <header className="header">
        <img
          className="our-logo"
          src="/mainLogo.png"
          alt="Bootcamper Social Logo"
        />
        <p
          className="profile-icon"
          onClick={() => {
            navigate("/mainPage");
          }}
        >
        {/* Displays the users' id or "G" at the top right if not logged in*/}
          {id === 0 ? "G" : id}
        </p>

      </header>
      <br></br>

      <div className="login-inputs">
        <h1 className="h1-styling">My Profile</h1>
        <div className="profile-page-button-and-icon-spacing">
          <LittleDestructiveButton
            handleClick={toggleDisable}
            className="little-red-button"
            buttonText={"Edit Profile"}
          />
        </div>

        <p className="create-account-styling">First Name:</p>
        <FormInput
          handleChange={handleChange}
          name="first_name"
          placeholder="Enter your First Name"
          default="Joe"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <p className="create-account-styling">Surname:</p>
        <FormInput
          handleChange={handleChange}
          name="last_name"
          placeholder="Enter your Surname"
          default="Blogs"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <p className="create-account-styling">Username:</p>
        <FormInput
          handleChange={handleChange}
          name="email"
          placeholder="Enter your Username"
          required="required"
          default="joe@email.com"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <p className="create-account-styling">Change Password:</p>
        <FormInput
          inputType="password"
          handleChange={handleChange}
          name="password"
          placeholder="Enter a Password"
          default="password"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <p className="create-account-styling">Address:</p>
        <FormInput
          handleChange={handleChange}
          name="house_number"
          placeholder="House/Flat Name or Number"
          default="12"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <br></br>
        <FormInput
          handleChange={handleChange}
          name="street_address"
          placeholder="Street Address"
          default="New Street"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <br></br>
        <FormInput
          handleChange={handleChange}
          name="town"
          placeholder="Town/City"
          default="Birmingham"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <br></br>
        <FormInput
          handleChange={handleChange}
          name="region"
          placeholder="Region"
          default="West Midlands"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <br></br>
        <FormInput
          handleChange={handleChange}
          name="postcode"
          placeholder="Postcode"
          default="B4 5QE"
          disabled={isDisabled}
          isDisabledText={isDisabledText}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <LittleConstructiveButton
          className="little-green-button"
          buttonText={"Save Changes"}
        />
        <br></br>
        <br></br>
        <br></br>
        <h1 className="login-error-message">{createEventError}</h1>
        <br></br>
 
        <LittleDestructiveButton
          handleClick={deleteToken}
          className="little-red-button"
          buttonText={"Log Out"}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ProfilePage;
