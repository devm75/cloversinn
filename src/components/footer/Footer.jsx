import React from "react";
import { Link } from "react-router-dom";
import "./styles/footerStyles.css";

import {
  Footerheader,
  Wrapper,
  FooterLeftHeader,
  FooterRightHeader,
  FooterCenter,
  FooterBottom,
} from "./styles/footer";
import { FiFacebook } from "react-icons/fi";
export const Footer = (props) => {
  const {disablePrefooter} = props
  return (
    <>
      <Wrapper>
        {!disablePrefooter && <Footerheader>
          <Link className="custom-link" to="/booking">
            <FooterLeftHeader>
              <h1>Contact information</h1>
            </FooterLeftHeader>
          </Link>
          <Link className="custom-link" to="/booking">
            <FooterRightHeader>
              <h1> Check accomodation</h1>
            </FooterRightHeader>
          </Link>
        </Footerheader>
        }
        <FooterCenter>CI</FooterCenter>
        <div
          className="underline"
          style={{
            borderBottom: "1px solid white",
            width: "100%",
            margin: "auto",
          }}
        ></div>
        <FooterBottom>
          <p style={{ padding: "20px" }}>
            Copyright &copy; 2022 By Clovers Inn{" "}
          </p>{" "}
          <p style={{ paddingBottom: "20px" }}>
            <FiFacebook></FiFacebook>
          </p>
        </FooterBottom>
      </Wrapper>
    </>
  );
};
