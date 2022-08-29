import React, { useState, useRef, useEffect } from "react";
import "./styles/formStyles.css";
import { TextField, Radio, Button } from "@mui/material";

export const Form = () => {
  const refContainerPhone = useRef();

  const handleSubmit = () => {};

  // useEffect(() => {
  // refContainerPhone.current.children[1].children[0].type = "numeric"
  // })
  return (
    <div className="form-container">
      <div style={{ background: "black", margin: "40px 0px", padding: "15px" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>Book a room</h1>
      </div>
      <p style={{ padding: "10px" }}>
        Please fill out the form below with your booking data. We will send you
        an email with your reserved route and payment details. keep in mind that
        the payment needs to be submitted within 24 hours after the booking has
        been made:
      </p>
      <div className="name-container">
        <form onSubmit={handleSubmit}></form>
        <TextField
          fullWidth
          id="outlined-basic"
          label="FirstName"
          variant="outlined"
          required
        ></TextField>
        <TextField
          fullWidth
          id="outlined-basic"
          label="LastName"
          variant="outlined"
          required
        ></TextField>
      </div>
      <div className="phone-container">
        <TextField
          // ref={refContainerPhone}
          fullWidth
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          required
        ></TextField>
      </div>
      <div className="email-container">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
        ></TextField>
      </div>
      <div
        className="underline"
        style={{
          height: "2px",
          borderBottom: "2px solid black",
          width: "100%",
        }}
      ></div>
      <div className="form-content-2">
        <div className="date-container" style={{ marginTop: "20px" }}>
          <div style={{ width: "100%" }}>
            <span className="date-label">
              {" "}
              <label>Checkin Date</label>
            </span>
            <TextField type="date" fullWidth></TextField>
          </div>
          <div style={{ width: "100%" }}>
            <span className="date-label">
              {" "}
              <label>Checkout Date</label>
            </span>
            <TextField type="date" fullWidth></TextField>
          </div>
        </div>
        <div className="date-container" style={{ marginTop: "20px" }}>
          <div style={{ width: "100%" }}>
            <span className="date-label">
              {" "}
              <label>Number of Guests *</label>
            </span>
            <TextField required type="number" fullWidth></TextField>
          </div>
          <div style={{ width: "100%" }}>
            <span className="date-label">
              {" "}
              <label>Number of Children *</label>
            </span>
            <TextField required type="number" fullWidth></TextField>
          </div>
        </div>
        <div className="date-container" style={{ marginTop: "20px" }}>
          <div  className="num-of-rooms-container">
            <span className="date-label">
              {" "}
              <label>Number of Rooms *</label>
            </span>
            <TextField required type="number" fullWidth></TextField>
          </div>
        </div>
        <div className="type-of-room-container">
          <span className="date-label">Type of Room *</span>
          <div className="radioContainer">
            <div
              className="radio-inner-container"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <Radio
                  // checked={selectedValue === "a"}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <span>Deluxe</span>
              </div>
              <div>
                <Radio
                  // checked={selectedValue === "a"}
                  // onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <span>Super Deluxe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="submit-btn-container">
        <Button
          type="submit"
          style={{
            width: "100%",
            fontSize: "22px",
            fontWeight:"bold",
            backgroundColor: "#F7F5BE",
            color: "black",
          }}
          variant="contained"
        >
          Send My Booking
        </Button>
      </div>
    </div>
  );
};
