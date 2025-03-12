import "./Page.css";
import aboutImg1 from "../images/About-img1.png";
import aboutImg2 from "../images/About-img2.jpeg";
import aboutImg3 from "../images/About-img3.jpeg";
import aboutImg4 from "../images/About-img4.png";

const About = () => {
  return (
    <>
    <div className="abt-container">

    {/* First Section */}

      <div className="abt-1">
        <div className="abt-img1">
        <img src={aboutImg1} alt="Nature Img" />
        </div>

        <div className="abt-para1">
          <p>About Us</p>
        </div>
      </div>

    {/* Second Section */}

      <div className="abt-2">
        <div className="abt-img2">
          <img src={aboutImg2} alt="Greenhouse" />
        </div>
        <div className="abt-content">
          <h2>OUR VISIO</h2>
          <p>
            Faucibus rutrum eros in urna blandit faucibus sapien et. Sem pulvinar sit adipiscing blandit.
          </p>
        </div>
      </div>

    {/* Third Section */}

      <div className="abt-img3">
        <div className="abt-img3">
          <img src={aboutImg3} alt="Nursery Img" />
        </div>
      </div>

    {/* Fourth Section */}

      <div className="abt-2">
        <div className="abt-content">
          <h2>OUR MISSION</h2>
          <p>
            Tincidunt lacus lorem fringilla neque fringilla sit dictumst nunc. Ultrices tortor tellus tortor duis faucibus.
          </p>
        </div>

        <div className="abt-img2">
          <img src={aboutImg4} alt="Greenhouse" />
        </div>
      </div>


    </div>
    </>
  );
};

export default About;
