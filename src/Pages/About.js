import "./Page.css";
import aboutImg1 from "../images/About-img1.png";
import aboutImg2 from "../images/About-img2.jpeg";
import aboutImg3 from "../images/About-img3.jpeg";
// import aboutImg4 from "../images/About-img4.png";

const About = () => {
  return (
    <>
    <div className="abt-container">
      <div className="abt-1">
        <div className="abt-img1">
        <img src={aboutImg1} alt="Nature Img" />
        </div>

        <div className="abt-para1">
          <p>About Us</p>
        </div>
      </div>

      <div className="abt-2">
        <div className="abt-img2">
          <img src={aboutImg2} alt="Greenhouse" />
        </div>
        <div className="abt-content">
          <h2>OUR VISION</h2>
          <p>
            Faucibus rutrum eros in urna blandit faucibus sapien et. Sem pulvinar sit adipiscing blandit.
          </p>
        </div>
      </div>

      <div className="abt-img3">
        <div className="abt-img3">
          <img src={aboutImg3} alt="Nursery Img" />
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
