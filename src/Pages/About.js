import "./Page.css";
import about_header from "../images/about_header.jfif";
import about_footer from "../images/service_garden.jfif";
import About_Pot from "../images/About_Pot.jpeg";
import About_plant from "../images/About_plant.jpeg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="link">
          <p>
            <Link to="/home">Home</Link> &gt; <span>About Us</span>
          </p>
        </div>

        <div className="line-header"></div>
        
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
