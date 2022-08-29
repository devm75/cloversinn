import React from "react";
import { NavBar } from "../navbar/NavBar";
import { Footer } from "../footer/Footer";
import { ImageWrapper } from "../hotel/hotel";
import Image1 from "../../assets/images/clouds2.jpg";
import Image2 from "../../assets/images/a6.jpg";
import Image3 from "../../assets/images/a2.jpg";
import Image4 from "../../assets/images/a3.jpg";
import Image5 from "../../assets/images/a4.jpg";
import Image6 from "../../assets/images/a5.jpg";
import Image7 from "../../assets/images/a8.jpg";
import Image8 from "../../assets/images/a9.jpg";
import "./sightSeeingStyles.css";
import {
  SightContainer,
  SightDescription,
  ImageContainer,
} from "./SightSeeing";

export const SightSeeing = () => {
  return (
    <>
      <NavBar></NavBar>
      <ImageWrapper height="400px">
        <img
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
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
          Sight Seeing
        </h1>
      </ImageWrapper>

      <SightContainer flexDirection="column">
        <ImageContainer>
          <img className="sight-image" src={Image2} alt="t" />
        </ImageContainer>
        <SightDescription>
          <h1 className="loc-heading">KHAJJIAR LAKE</h1>
          <p>
            In the shadow of the snow-covered Himalayas, Khajjar Lake is the
            most spectacular of Lakes. Surrounded by cedar forest, the lake is
            located at an elevation of 1920m. The small water streams of the
            Himalayas act as a source for the Khajjar Lake. One can also visit
            the Khajinag temple which features fine wood carvings and a gold
            dome.{" "}
          </p>
        </SightDescription>
      </SightContainer>
      <SightContainer flexDirection="column-reverse">
        <SightDescription>
          <h1 className="loc-heading">PANJPULLA</h1>
          <p>
            Shrouded by a green blanket of pine and deodar trees and enfolding
            refreshing water streams, the picturesque Panchpula has always been
            one of the most favourite spots of tourists in Dalhousie. It is a
            nice picnic spot,where you can spend some time with your family and
            friends and enjoy the loveliness of exotic waterfalls and refreshing
            streams.The Panchpula is only three kilometers from the main city of
            Dalhousie.{" "}
          </p>
        </SightDescription>
        <ImageContainer>
          <img className="sight-image" src={Image3} alt="t" />
        </ImageContainer>
      </SightContainer>
      <SightContainer flexDirection="column">
        <ImageContainer>
          <img className="sight-image" src={Image4} alt="t" />
        </ImageContainer>
        <SightDescription>
          <h1 className="loc-heading">CHAMERA DAM</h1>
          <p>
            Dalhousie-Chamera Dam is one of the most frequented tours from
            Dalhousie. The Chamera Dam lies on the route to Chamba at an
            approximate distance of 36 Kilometers from the center of the city of
            Dalhousie.The Chamera Dam is built over the River Ravi and supports
            the hydroelectricity project in the region. The reservoir of the dam
            is the Chamera Lake that is the hub of various water sports near the
            city of Dalhousie.{" "}
          </p>
        </SightDescription>
      </SightContainer>
      <SightContainer flexDirection="column-reverse">
        <SightDescription>
          <h1 className="loc-heading">St. FRANCIS CHURCH</h1>
          <p>
            The St. Francis Church is draped by the branches of deodar trees.
            One can see some of the finest examples of glass and stonework in
            the interior of the church.Each and every wall of the church speaks
            and narrates its colorful history.The structure of the church is
            more than 100 years old, still it looks as fresh as it was built
            yesterday. The church is built in the typical British architecture
            and bears resemebelance to many famous churches of England.{" "}
          </p>
        </SightDescription>
        <ImageContainer>
          <img className="sight-image" src={Image5} alt="t" />
        </ImageContainer>
      </SightContainer>
      <SightContainer flexDirection="column">
        <ImageContainer>
          <img className="sight-image" src={Image6} alt="t" />
        </ImageContainer>
        <SightDescription>
          <h1 className="loc-heading">BASHOLI BRIDGE</h1>
          <p>
            The bridge,which is in Basholi tehsil of Kathua district of jammu is
            North India's first cable-stayed bridge. It has not only provided
            close connectivity among the three states of Jammu and Kashmir,
            Himachal Pradesh and Punjab but also made the lives of those living
            close to the Ravi so much more easier.Residents of more than three
            dozen villages now don't have to undertake cumbersome journey to
            meet up.{" "}
          </p>
        </SightDescription>
      </SightContainer>
      <SightContainer flexDirection="column-reverse">
        <SightDescription>
          <h1 className="loc-heading">DAINKUND TREK</h1>
          <p>
            Dainkund Peak is the highest peak in the Dalhousie region and is
            famous tourist spot where people come to experience the beautiful
            views and sense of calmness that this location has to offer with
            such a serene setting. The peak is the highests one can get on and
            gives a 360-degree view into the depths of the beautiful valleys
            that you'll find no matter which direction you face. At the peak,
            you can experience the comfort of the silent breeze flowing, making
            you feel as if you are floating in the clouds. The breezes make a
            charming sound while moving through the trees{" "}
          </p>
        </SightDescription>
        <ImageContainer>
          <img className="sight-image" src={Image7} alt="t" />
        </ImageContainer>
      </SightContainer>
      <SightContainer flexDirection="column">
        <ImageContainer>
          <img className="sight-image" src={Image8} alt="t" />
        </ImageContainer>
        <SightDescription>
          <h1 className="loc-heading">KALATOP</h1>
          <p>
            Kalatop Khajjar Sanctuary is a 30.69 Km sq. animal sanctuary of
            Kalatop and Khajjar in the chamba district of Himachal Pradesh,
            India.The sanctuary area is well laid out for trekking trails both
            at Kalatop and Khajjar.There is a dense deodar and fir forest
            covering 19.63 km sq. of the sanctuary, which is about 6 km from
            Dalhousie.Pheasants,serow and black bear are some of the common
            animals found here.The sanctuary lies in the path of the Ravi River,
            and is surrounded by coniferous and oak forests.{" "}
          </p>
        </SightDescription>
      </SightContainer>

      <Footer disablePrefooter={true}></Footer>
    </>
  );
};
