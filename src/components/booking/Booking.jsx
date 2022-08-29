import React, { useEffect } from "react";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../footer/Footer";
import {
  BookingHeader,
  LeftContainer,
  RightContainer,
  TextOverImage,
  Wrapper,
} from "./booking";
import { Form } from "../bookingForm/Form";
import Image1 from "../../assets/images/clouds.jpg";
import "./booking.css";

export const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <NavBar></NavBar>
      <BookingHeader>
        <img className="booking-hero-image" src={Image1} alt="i"></img>
        <TextOverImage>Book Your Room Today</TextOverImage>
      </BookingHeader>
      <Wrapper>
        <LeftContainer>
          <h1 className="booking-heading">Clovers Inn</h1>
          <p className="booking-heading-top">Subhash Chownk</p>
          <p className="booking-heading-bottom">Dalhousie</p>
        </LeftContainer>
        <RightContainer>
          <div className="address-loc-container">
            <p className="address-line-1">Clovers Inn</p>
            <p className="address-line-2">Subhash Chownk</p>
            <p className="address-line-3">Dalhousie</p>
          </div>
          <div className="contact-info-container">
            <p className="contact-heading">call us:</p>
            <h1 className="contact-number">+91 1899242409</h1>
          </div>
          <div className="email-info-container">
            <p className="email-heading">Email:</p>
            <h1 className="email-value">sumeshmahajan9196@gmail.com</h1>
          </div>
        </RightContainer>
      </Wrapper>
      <Form></Form>

      <Footer></Footer>
    </>
  );
};
