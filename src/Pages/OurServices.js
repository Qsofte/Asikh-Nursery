import React from "react";
import "./Page.css";
import service_first from "../images/service_first.jpg";
import services_landscape from "../images/services_landscape.png";
import service_garden from "../images/service_garden.jfif";
import service_delivery from "../images/service_delivery.jfif";
import service_custom from "../images/service_custom.jpeg";

const services = [
  {
    title: "Plant Care Advice",
    description: "Plant care involves several key practices to keep them healthy and thriving. Water consistently but avoid overwatering, adjusting based on the plant type and season. Ensure the plant gets the right light, whether full sun, partial shade, or low light.",
    image: service_first,
  },
  {
    title: "Landscaping design",
    description: "Focus on creating a balance between functionality and aesthetics. Choose plants suited to the local climate, and use a mix of textures and colors for visual appeal. Incorporate hardscaping elements like pathways or patios for structure. Ensure proper irrigation and drainage for plant health. Opt for sustainable practices, such as water-efficient plants and eco-friendly materials. Plan for seasonal maintenance to keep the landscape vibrant year-round.",
    image: services_landscape,
  },
  {
    title: "Garden maintenance",
    description: "Garden maintenance includes essential tasks to ensure your plants remain healthy and your outdoor space stays vibrant. Water plants as needed, avoiding overwatering, and remove weeds regularly to prevent them from competing for nutrients. Prune dead or overgrown branches to promote healthy growth and shape plants. Enrich the soil with compost or organic matter to maintain its fertility and structure. Use mulch to retain moisture, regulate soil temperature, and reduce weed growth.",
    image: service_garden,
  },
  {
    title: "Home delivery of plants",
    description: "Home delivery of plants is a convenient service where plants are delivered directly to a customer's doorstep, offering a wide variety of options such as indoor plants, outdoor plants, flowers, and small trees. Customers can browse and choose plants from online platforms or local nurseries, and the plants are carefully packaged to ensure they arrive in perfect condition. Shipping options vary from local to international delivery, depending on the vendor. Along with the plants, many services provide care instructions to help customers maintain their new plants. This service makes it easier for plant enthusiasts to expand their collections without leaving home.",
    image: service_delivery,
  },
  {
    title: "Custom garden setup",
    description: "A custom garden setup involves designing and creating a personalized outdoor space tailored to an individual's preferences, available space, and lifestyle. This service typically includes planning the layout, selecting plants, choosing garden structures (like paths, fountains, or seating areas), and deciding on themes or specific aesthetics (such as a tropical, minimalist, or cottage garden). Professional garden designers work closely with clients to understand their vision, taking into account factors like sunlight, soil type, and climate. The setup may include installing raised beds, garden furniture, lighting, irrigation systems, and decorative elements. It ensures a harmonious and functional garden space that meets both aesthetic and practical needs. This service is ideal for homeowners who want to create a unique outdoor retreat or enhance their property's curb appeal.",    
    image: service_custom,
  },
];

const OurServices = () => {
  return (
    <div className="services-container">
      <div className="service-header"><p>Our Services</p></div>
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.image} alt={service.title} className={`service-img img-${index}`} />
          <div className="service-content">
            <h2 className="service-title ">{service.title}</h2>
            <p className="service-description">{service.description}</p>

            <a href="/our-services" className="know-more">Know more →</a>
          </div>
        </div>
      ))}
    </div>
  );
};


export default OurServices;
