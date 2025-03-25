import "./Page.css";
// import aboutImg1 from "../images/About-img1.png";
// import aboutImg2 from "../images/About-img2.jpeg";
// import aboutImg3 from "../images/About-img3.jpeg";
// import aboutImg4 from "../images/About-img4.png";
// import { Link } from "react-router-dom";
import about_header from "../images/about_header.jfif";
import about_footer from "../images/service_garden.jfif";
import About_Pot from "../images/About_Pot.jpeg";
import About_plant from "../images/About_plant.jpeg";

const About = () => {
  return (
    // <>
    // <div className="abt-container">

    // {/* First Section */}

    //   <div className="abt-1">
    //     <div className="abt-img1">
    //     <img src={aboutImg1} alt="Nature Img" />
    //     </div>

    //     <div className="abt-para1">
    //       <p>About Us</p>
    //     </div>
    //   </div>

    // {/* Second Section */}

    //   <div className="abt-2">
    //     <div className="abt-img2">
    //       <img src={aboutImg2} alt="Greenhouse" />
    //     </div>
    //     <div className="abt-content">
    //       <h2>OUR VISIOn</h2>
    //       <p>
    //         Faucibus rutrum eros in urna blandit faucibus sapien et. Sem pulvinar sit adipiscing blandit.
    //       </p>
    //     </div>
    //   </div>

    // {/* Third Section */}

    //   <div className="abt-img3">
    //     <div className="abt-img3">
    //       <img src={aboutImg3} alt="Nursery Img" />
    //     </div>
    //   </div>

    // {/* Fourth Section */}

    //   <div className="abt-2">
    //     <div className="abt-content">
    //       <h2>OUR MISSION</h2>
    //       <p>
    //         Tincidunt lacus lorem fringilla neque fringilla sit dictumst nunc. Ultrices tortor tellus tortor duis faucibus.
    //       </p>
    //     </div>

    //     <div className="abt-img2">
    //       <img src={aboutImg4} alt="Greenhouse" />
    //     </div>
    //   </div>
    // </div>
    // </>
    <div className="about-page">
      <div className="container">
        {/* <div className="link">
        <p>
          <Link to="/">Home</Link> &gt; <span>About Us</span>
        </p>
        </div> */}
        
        <img src= {about_header} alt="Garden" className="header-image" />
        
        {/* Our Story Section */}
        <section className="section">
          <h2 className="section-title">Our Story</h2>
          <p>
            Fruits from his farms—sent as a token of blessings, good wishes, and gratitude—to loved ones abroad and the local community that cares for them in foreign lands. A simple act of kindness, rooted in tradition, carried across borders.
          </p>

          <p>
            What began as a heartfelt gesture soon grew into a larger vision—one that sought to bridge the gap between the farmers of Bihar and fork holders in faraway lands. A dream nurtured by the desire to connect those who cultivate with those who consume, ensuring that the essence of home reaches distant tables.
          </p>

          <p>
            This vision found life through the dedication of his son, Dr. Maurya Vijay Chandra, whose relentless efforts, along with the unwavering support of many well-wishers, turned aspiration into reality. A journey of connection, gratitude, and shared prosperity continues to unfold.
          </p>
        </section>
        
        {/* Images */}
        <div className="image-grid">
          <img src={About_Pot} alt="Pots" className="About_Pot" />
          <img src={About_plant} alt="Plants" className="About_plant" />
        </div>
        
        {/* Our Vision & Our Mission */}
        <div className="content-grid">
          <section>
            <h2 className="section-title abt_head1">Our Vision</h2>
            <p>
              Fruits from his farms—sent as a token of blessings, good wishes, and gratitude—to loved ones abroad and the local community that cares for them in foreign lands. A simple act of kindness, rooted in tradition, carried across borders.
            </p>

            <p>
              What began as a heartfelt gesture soon grew into a larger vision—one that sought to bridge the gap between the farmers of Bihar and fork holders in faraway lands. A dream nurtured by the desire to connect those who cultivate with those who consume, ensuring that the essence of home reaches distant tables.
            </p>

            <p>
              This vision found life through the dedication of his son, Dr. Maurya Vijay Chandra, whose relentless efforts, along with the unwavering support of many well-wishers, turned aspiration into reality. A journey of connection, gratitude, and shared prosperity continues to unfold.
            </p>

            <img src={About_plant} alt="Plants" className="About_plant Plant" />
          </section>
          
          <section className="abt-mission">
            <h2 className="section-title abt_head2">Our Mission</h2>
            <p className="abt_para">
              Fruits from his farms—sent as a token of blessings, good wishes, and gratitude—to loved ones abroad and the local community that cares for them in foreign lands. A simple act of kindness, rooted in tradition, carried across borders.
            </p>

            <p className="abt_para">
              What began as a heartfelt gesture soon grew into a larger vision—one that sought to bridge the gap between the farmers of Bihar and fork holders in faraway lands. A dream nurtured by the desire to connect those who cultivate with those who consume, ensuring that the essence of home reaches distant tables.
            </p>
              
            <p className="abt_para">
              This vision found life through the dedication of his son, Dr. Maurya Vijay Chandra, whose relentless efforts, along with the unwavering support of many well-wishers, turned aspiration into reality. A journey of connection, gratitude, and shared prosperity continues to unfold.
            </p>
          </section>
        </div>
        
        {/* Footer Image */}
        <img src= {about_footer} alt="Garden" className="footer-image" />
      </div>
    </div>
  );
};

export default About;
