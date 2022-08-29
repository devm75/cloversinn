import React from "react";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../footer/Footer";
import { ImageWrapper } from "../hotel/hotel";
import "./roomStyles.css";
import Image1 from "../../assets/images/clouds2.jpg";
import { Carousel } from "react-responsive-carousel";
import Image2 from "../../assets/images/g7.jpg";
import Image3 from "../../assets/images/g11.jpg";
import Image4 from "../../assets/images/g2.jpg";
import Image5 from "../../assets/images/g29.jpg";
import Image6 from "../../assets/images/g30.jpg";
import Image7 from "../../assets/images/g27.jpg";
import Image8 from "../../assets/images/g5.jpg";
import Image9 from "../../assets/images/g3.jpg";

export const Rooms = () => {
  return (
    <>
      <NavBar></NavBar>
      <ImageWrapper height="400px">
        <img
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
          src={Image1}
          alt="d"
        />
        <h1 className="rooms-page-heading">Find a room for you</h1>
      </ImageWrapper>
      <div className="heading-container">
        <h1>6</h1>
        <h2 style={{ textAlign: "center" }}>High Standard rooms in total</h2>
      </div>
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          showIndicators={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img className="room-image-rooms" src={Image2} alt="s"></img>
          </div>
          <div>
            <img className="room-image-rooms" src={Image3} alt="s"></img>
          </div>
          <div>
            <img className="room-image-rooms" src={Image4} alt="s"></img>
          </div>
        </Carousel>
        <div className="pricing-room">
          <p style={{ textAlign: "center", padding: "20px" }}>Rs. 4000/night</p>
          <h4 style={{ textAlign: "center", padding: "10px" }}>Deluxe Room</h4>
          <p style={{ textAlign: "center", padding: "10px" }}>
            This Deluxe double bedroom features a king size bed with 8" thick
            mattress, white linen bedding with duvet. The vitrified tile floor
            with elegantly designed interior hosting features like LED Tv,
            Intercom and complimentary Wi-Fi access.
          </p>
          <div style={{ display: "flex", flex: "1" }}>
            <div
              style={{
                padding: "20px",
                flex: 0.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>2</h1>
              <p>occupancy</p>
            </div>
            <div
              style={{
                padding: "20px",
                flex: 0.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>1</h1>
              <p>Bed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          showIndicators={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              className="room-image-rooms"
              // style={{ height: "600px", width: "900px" }}
              src={Image5}
              alt="s"
            ></img>
          </div>
          <div>
            <img
              className="room-image-rooms"
              // style={{ height: "600px", width: "900px" }}
              src={Image6}
              alt="s"
            ></img>
          </div>
          <div>
            <img
              className="room-image-rooms"
              // style={{ height: "600px", width: "900px" }}
              src={Image7}
              alt="s"
            ></img>
          </div>
        </Carousel>
        <div className="pricing-room">
          <p style={{ textAlign: "center", padding: "20px" }}>Rs. 4500/night</p>
          <h4 style={{ textAlign: "center", padding: "10px" }}>
            {" "}
            Super Deluxe Room
          </h4>
          <p style={{ textAlign: "center", padding: "10px" }}>
            This super Deluxe bedroom features a King size bed with 8" thick
            mattress, white linen bedding with duvet. The vitrified title floor
            with elegantly designed interior hosting features like LED
            Tv,Intercom and complementary Wi-Fi access.
          </p>
          <div style={{ display: "flex", flex: "1" }}>
            <div
              style={{
                padding: "20px",
                flex: 0.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>2</h1>
              <p>occupancy</p>
            </div>
            <div
              style={{
                padding: "20px",
                flex: 0.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>1</h1>
              <p>Bed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          showIndicators={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              className="room-image-rooms"
              // style={{ height: "600px", width: "900px" }}
              src={Image4}
              alt="s"
            ></img>
          </div>
          <div>
            <img
              className="room-image-rooms"
              // style={{ height: "600px", width: "900px" }}
              src={Image8}
              alt="s"
            ></img>
          </div>
          <div>
            <img
              className="room-image-rooms"
              // style={{ height: "600px", width: "900px" }}
              src={Image9}
              alt="s"
            ></img>
          </div>
        </Carousel>
        <div className="pricing-room">
          <p style={{ textAlign: "center", padding: "20px" }}>Rs. 4500/night</p>
          <h4 style={{ textAlign: "center", padding: "10px" }}>
            {" "}
            Super Deluxe Triple Room
          </h4>
          <p style={{ textAlign: "center", padding: "10px" }}>
            This super Triple Deluxe bedroom features a King size bed with 8"
            thick mattress, white linen bedding with duvet. The vitrified title
            floor with elegantly designed interior hosting features like LED
            Tv,Intercom and complementary Wi-Fi access.
          </p>
          <div style={{ display: "flex", flex: "1" }}>
            <div
              style={{
                padding: "20px",
                flex: 0.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>3</h1>
              <p>occupancy</p>
            </div>
            <div
              style={{
                padding: "20px",
                flex: 0.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>2</h1>
              <p>Bed</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
