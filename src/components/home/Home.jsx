import React from "react";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineStar } from "react-icons/ai";
import { GrWifi } from "react-icons/gr";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  TextOverImage,
  ImagesContainer,
  ImageContainer,
  ImagesDescription,
  TextUnderline,
  Wrapper,
  LeftContainer,
  RightContainer,
} from "./styles/styles";
import { Form } from "../bookingForm/Form";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Footer } from "../footer/Footer";
import Image1 from "../../assets/images/g15.jpg";
import Image2 from "../../assets/images/g27.jpg";
import Image3 from "../../assets/images/g14.jpg";
import Image4 from "../../assets/images/g13.jpg";
import Image5 from "../../assets/images/a1.jpg";
import Image6 from "../../assets/images/a2.jpg";
import Image7 from "../../assets/images/a3.jpg";
import Image8 from "../../assets/images/a4.jpg";
import Image9 from "../../assets/images/a5.jpg";
import "./styles/styles.css";

export const Home = ({ children }) => {
  const navigate = useNavigate()  
  return (
    <>
      {children}
      <div className="carousel-container"></div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3500}
        stopOnHover={false}
        transitionTime={5}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img className="carousel-image" src={Image1} alt="carousel-img"></img>
          <TextOverImage>It's Where Dreams Come True</TextOverImage>
        </div>
        <div>
          <img className="carousel-image" src={Image2} alt="carousel-img"></img>
          <TextOverImage>It's Where Dreams Come True</TextOverImage>
        </div>
        <div>
          <img className="carousel-image" src={Image3} alt="carousel-img"></img>
          <TextOverImage>It's Where Dreams Come True</TextOverImage>
        </div>
      </Carousel>
      <ImagesContainer>
        <ImageContainer className="images-container" flexDirection="column">
          <img className="template-image" src={Image1} alt="idj"></img>
          <ImagesDescription>Outdoor Sitting</ImagesDescription>
          <TextUnderline className="text-underline"></TextUnderline>
        </ImageContainer>
        <ImageContainer className="images-container" flexDirection="column">
          <img className="template-image" src={Image4} alt="idj"></img>
          <ImagesDescription>Well furnished Rooms</ImagesDescription>
          <TextUnderline className="text-underline"></TextUnderline>
        </ImageContainer>
        <ImageContainer className="images-container" flexDirection="column">
          <img className="template-image" src={Image5} alt="idj"></img>
          <ImagesDescription>View Near Hotel</ImagesDescription>
          <TextUnderline className="text-underline"></TextUnderline>
        </ImageContainer>
      </ImagesContainer>
      <Wrapper minHeight="400px" localizations={true}>
        <LeftContainer decreasePadding={true} decreasedPadding="10px">
          <h1 className="welcome-top">Welcome</h1>
          <h1 className="welcome-bottom">to the Clovers Inn</h1>
          <p className="stars-container">
            <AiOutlineStar style={{ fill: "orange", fontSize: "30px" }} />
            <AiOutlineStar style={{ fill: "orange", fontSize: "30px" }} />
            <AiOutlineStar style={{ fill: "orange", fontSize: "30px" }} />
            <AiOutlineStar style={{ fill: "orange", fontSize: "30px" }} />
            <AiOutlineStar style={{ fill: "orange", fontSize: "30px" }} />
          </p>
        </LeftContainer>
        <RightContainer>
          <p style={{ lineHeight: "1.4" }}>
            one of the best locations in dalhousie, Clovers Inn welcomes you to
            avail its luxurious accomodation and facilities. With specialist
            rooms and a host of facilities, we at Clovers Inn, will always
            strive to make your stay most pleasant and memorable.
          </p>
          <p style={{ lineHeight: "1.4" }}>
            We offer all guests complimentary access to high speed Internet for
            up to two devices.Guests who book in advance and directly with us
            can also enjoy special rates,exclusive privileges and hotel
            offers.Relax with loved ones on a specially curated family holiday
            or a romantic honeymoon.
          </p>
        </RightContainer>
      </Wrapper>
      <div className="book-your-room-btn-container">
        <Button
          className="book-your-room-button"
          size={"medium"}
          variant="contained"
          onClick={()=>{navigate("/booking")}}
        >
          Book Your Room
        </Button>
      </div>
      <Wrapper flexDirection="column">
        <h1 style={{ textAlign: "center", margin: "2rem" }}>
          Localization and attractions
        </h1>
        <Wrapper gap="20px" localizations={true}>
          <ImageContainer flex="0.2">
            <img className="static-image" src={Image5} alt="screen-1"></img>
          </ImageContainer>
          <ImageContainer flex="0.2">
            <img className="static-image" src={Image6} alt="screen-2"></img>
          </ImageContainer>
          <ImageContainer flex="0.2">
            <img className="static-image" src={Image7} alt="scren-3"></img>
          </ImageContainer>
          <ImageContainer flex="0.2">
            <img className="static-image" src={Image8} alt="scren-4"></img>
          </ImageContainer>
          <ImageContainer flex="0.2">
            <img className="static-image" src={Image9} alt="screen-5"></img>
          </ImageContainer>
        </Wrapper>
      </Wrapper>
      <Wrapper localizations={true}>
        <LeftContainer
          borderRight="none"
          decreasePadding={true}
          decreasedPadding="20px"
        >
          <h1 className="services-top">Services</h1>
          <h1 className="services-bottom">and standards</h1>
        </LeftContainer>
        <RightContainer>
          <p>
            We Expertise in Perfect Service And Have Extremely High Standards In
            Hospitality
          </p>
        </RightContainer>
      </Wrapper>
      <TextUnderline></TextUnderline>
      <Wrapper
        padding="40px"
        localizations={true}
        gap="30px"
        decreasePadding={true}
        decreasedPadding="10px"
      >
        <LeftContainer
          borderRight="none"
          flexDirection="row"
          flex="0.35"
          marginTop="40px"
        >
          <div className="icon-container">
            <span className="icon-container">
              <AiOutlineStar
                style={{
                  fontSize: "80px",
                  background: "#F7F5BE",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              ></AiOutlineStar>
            </span>
          </div>
          <div className="paragraph-containers">
            <p className="heading">Exclusive interior</p>
            <p>
              Exclusive and best Interior you may get for the price you are
              paying for.We bet you may not get such services at this price.
            </p>
          </div>
        </LeftContainer>
        <RightContainer
          flexDirection="row"
          flex="0.35"
          decreasePadding={true}
          decreasedPadding="10px"
        >
          {" "}
          <div className="icon-container">
            <span className="icon-container">
              <GrWifi
                style={{
                  fontSize: "80px",
                  background: "#F7F5BE",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              ></GrWifi>
            </span>
          </div>
          <div className="paragraph-containers">
            <p className="heading">Free Wifi</p>
            <p>
              Free wifi in our home stay. We understand that there is no life
              without internet so we provide you wifi so that you can stay
              connected to your loved ones.
            </p>
          </div>
        </RightContainer>
      </Wrapper>
      <Wrapper>
        <Form></Form>
      </Wrapper>
      <Footer></Footer>
    </>
  );
};
