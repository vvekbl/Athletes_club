


import { Row, Col, Image } from "react-bootstrap";
import banner from "../images/banner.jpg";
import gallery1 from "../images/gallery1.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jpg";
import gallery9 from "../images/gallery9.jpg";
import gallery10 from "../images/gallery10.jpg";
import gallery11 from "../images/gallery11.jpg";
import gallery12 from "../images/gallery12.jpg";
import gallery13 from "../images/gallery13.jpg";
import gallery17 from "../images/gallery17.jpg";
import gallery18 from "../images/gallery18.jpg";
import "../CSS/index.css";

const Gallery = () => {
  return (
    <>
    
      <div>
        {/* <br></br> */}
        <div style={{ backgroundColor: "#D2D9E2" }}>
          <div>
        <Image src={banner} style={{ height: 500, width: 1248 }} className="gallery" />

        <br></br>
        <br></br>
        <br></br>
      </div>

      <div style={{ display: "flex" }}>
        <Col>
          <Image src={gallery8} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery6} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery7} className="gallery" />
        </Col>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ display: "flex" }}>
        <Col>
          <Image src={gallery9} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery10} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery11} className="gallery" />
        </Col>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ display: "flex" }}>
        <Col>
          <Image src={gallery1} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery12} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery13} className="gallery" />
        </Col>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ display: "flex" }}>
        <Col>
          <Image src={gallery12} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery13} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery4} className="gallery" />
        </Col>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ display: "flex" }}>
        <Col>
          <Image src={gallery18} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery13} className="gallery" />
        </Col>
        <Col>
          <Image src={gallery17} className="gallery" />
        </Col>
        </div>
      </div>
      </div>
    </>
  );
};

export default Gallery;