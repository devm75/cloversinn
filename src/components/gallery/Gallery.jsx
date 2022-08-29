import React, { useState } from "react";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../../components/footer/Footer";
import "./gallery.css";
import { ImagesContainer, ImageContainer } from "./gallery";
import Image1 from "../../assets/images/g1.jpg";
import Image2 from "../../assets/images/g2.jpg";
import Image3 from "../../assets/images/g3.jpg";
import Image4 from "../../assets/images/g4.jpg";
import Image5 from "../../assets/images/g5.jpg";
import Image6 from "../../assets/images/g6.jpg";
import Image7 from "../../assets/images/g7.jpg";
import Image8 from "../../assets/images/g8.jpg";
import Image9 from "../../assets/images/g10.jpg";
import Image10 from "../../assets/images/g11.jpg";
import Image11 from "../../assets/images/g12.jpg";
import Image12 from "../../assets/images/g13.jpg";
import Image13 from "../../assets/images/g14.jpg";
import Image14 from "../../assets/images/g15.jpg";
import Image15 from "../../assets/images/g16.jpg";
import Image16 from "../../assets/images/g19.jpg";
import Image17 from "../../assets/images/g20.jpg";
import Image18 from "../../assets/images/g21.jpg";
import Image19 from "../../assets/images/g22.jpg";
import Image20 from "../../assets/images/g27.jpg";
import Image21 from "../../assets/images/g28.jpg";
import Image22 from "../../assets/images/g29.jpg";
import Image23 from "../../assets/images/g30.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 720,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Gallery = () => {
  let imagesArray = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
  ];
  const [presentImageIndex, setPresentImageIndex] = useState(0);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const showImagesModal = (e) => {
    console.log(e.target.name);
    setOpen(true);
    setPresentImageIndex(Number(e.target.name));
  };

  const setActiveImage = () => {
    return imagesArray[presentImageIndex];
  };

  const showNextPhoto = () => {
    console.log(presentImageIndex);
    if (presentImageIndex <= imagesArray.length - 2) {
      console.log("i was executed");
      setPresentImageIndex(Number(presentImageIndex) + 1);
      //   setActiveImage();
    } else {
      console.log("outside bound");

      setPresentImageIndex(0);
      // setActiveImage()
    }
  };

  const showPrevPhoto = () => {
    if (presentImageIndex > 0) {
      setPresentImageIndex(Number(presentImageIndex) - 1);
    } else {
      console.log("outside bound");
      setPresentImageIndex(imagesArray.length - 1);
    }
  };
  return (
    <>
      <NavBar></NavBar>

      <div className="gallery-container">
        <ImagesContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image1}
              alt="img1"
              name={0}
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image2}
              name={1}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image3}
              name={2}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image4}
              name={3}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image5}
              name={4}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image6}
              name={5}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image7}
              name={6}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image8}
              name={7}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image9}
              name={8}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image10}
              name={9}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image11}
              name={10}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image12}
              name={11}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image13}
              name={12}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image14}
              name={13}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image15}
              name={14}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image16}
              name={15}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image17}
              name={16}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image18}
              name={17}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image19}
              name={18}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image20}
              naem={19}
              alt="img1"
            ></img>
          </ImageContainer>{" "}
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image21}
              name={20}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image22}
              name={21}
              alt="img1"
            ></img>
          </ImageContainer>
          <ImageContainer onClick={showImagesModal}>
            <img
              className="gallery-image"
              src={Image23}
              name={22}
              alt="img1"
            ></img>
          </ImageContainer>
        </ImagesContainer>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button className="prev-button-image-modal" onClick={showPrevPhoto}>
              {" "}
              {"<"}{" "}
            </button>
            <img
              className="modal-image"
              src={setActiveImage()}
              alt="img-"
            ></img>
            <button className="next-button-image-modal" onClick={showNextPhoto}>
              {">"}
            </button>
          </Box>
        </Modal>
      </div>
      <Footer></Footer>
    </>
  );
};
