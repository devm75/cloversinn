import React from "react";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../footer/Footer";
import {
  HotelInfo,
  ImageWrapper,
  LeftContainer,
  RightContainer,
  StarsContainer,
  LargeImageContainers,
  LeftImageContainer,
  RightImageContainer,
  PreFooter,
} from "./hotel";
import "./hotelStyles.css";
import Image1 from "../../assets/images/clouds2.jpg";
import Image2 from "../../assets/images/g16.jpg";
import Image3 from "../../assets/images/g27.jpg";

import { RiStarFill } from "react-icons/ri";

export const Hotel = () => {
  return (
    <>
      <NavBar></NavBar>
      <ImageWrapper>
        <img
          style={{ height: "450px", width: "100%", objectFit: "cover" }}
          src={Image1}
          alt="d"
        />
        <h1
          style={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            fontSize: "50px",
          }}
        >
          About the Hotel
        </h1>
      </ImageWrapper>
      <StarsContainer>
        <RiStarFill
          style={{ fontSize: "60px", color: "#FFD700", marginRight: "20px" }}
        ></RiStarFill>
        <RiStarFill
          style={{ fontSize: "60px", color: "#FFD700", marginRight: "20px" }}
        ></RiStarFill>
        <RiStarFill
          style={{ fontSize: "60px", color: "#FFD700", marginRight: "20px" }}
        ></RiStarFill>
        <RiStarFill
          style={{ fontSize: "60px", color: "#FFD700", marginRight: "20px" }}
        ></RiStarFill>
        <RiStarFill
          style={{ fontSize: "60px", color: "#FFD700", marginRight: "20px" }}
        ></RiStarFill>
      </StarsContainer>
      <HotelInfo>
        <LeftContainer>
          <h1 className="heading-about-our-hotel">About Our Hotel</h1>
        </LeftContainer>
        <RightContainer>
          <p>
            One of the best locations in Dalhousie, Hotel Clovers Inn welcomes
            you to avail its luxurious acoomodation and facilities. With
            specialist rooms and a host of facilities, we at Clovers Inn, will
            always strive to make your stay most pleasant and memorable.
          </p>
          <p>
            We offer all guests complimentary access to high speed Internet for
            up to two devices. Guests who book in advance and directly with us
            can also enjoy special rates,exclusive privileges and hotel
            offers.Relax with loved ones on a specially curated family holiday
            or a romantic honeymoon.
          </p>
        </RightContainer>
      </HotelInfo>
      <LargeImageContainers>
        <LeftImageContainer>
          <img
            src={Image2}
            alt="k"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </LeftImageContainer>
        <RightImageContainer>
          <img
            src={Image3}
            style={{ objectFit: "cover", width: "100%" }}
            alt="s"
          />
        </RightImageContainer>
      </LargeImageContainers>
      <PreFooter>
        <h1
          style={{
            textAlign: "center",
            fontSize: "60px",
            padding: "40px 10px;",
          }}
        >
          CI
        </h1>
        <h1 style={{ textAlign: "center" }}>
          Welcome to Clovers Inn, where your authentic
        </h1>
        <h1 style={{ textAlign: "center" }}>Dalhousie experience begins!</h1>
      </PreFooter>
      <Footer></Footer>
    </>
  );
};
