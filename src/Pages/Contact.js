import React, { useRef } from 'react';

const Contact = () => {
  const fullNameRef = useRef(null);
  const mobileRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = () => {
    const fullName = fullNameRef.current.value;
    const mobile = mobileRef.current.value;
    const message = messageRef.current.value;

    if (!fullName || !mobile || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      `Full Name: ${fullName}\nMobile: ${mobile}\nMessage: ${message}`
    )}`;
    window.open(whatsappLink, '_blank');

    fullNameRef.current.value = ' ';
    mobileRef.current.value = ' ';
    messageRef.current.value = ' ';

    alert('Your message has been sent successfully!');
  };

  return (
    <div className="contact-container">
      <h2 className='contact-head'>Contact Us</h2>
      <div className="contact-box">
        <div className="contact-form">
          <form>
            <label htmlFor="fullName">Name</label>
            <input type="text" id="fullName" placeholder="Sample Text" ref={fullNameRef} required />
    
            <label htmlFor="mobile">Phone Number</label>
            <input type="tel" id="mobile" placeholder="Sample Text" ref={mobileRef} required />
    
            <label htmlFor="message">Comment Box</label>
            <textarea id="message" placeholder="Sample Text" ref={messageRef} required></textarea>
    
            <div className="submit-btn-container">
              <button className="submit-btn" type="button" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.052304211842!2d85.21827447485396!3d25.702692211041995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d357ce073cb%3A0x9242b343fba15103!2sEngineer%20SK%20Singh%20Research%20and%20Outreach%20Center%2C%20ATMABODH!5e0!3m2!1sen!2sin!4v1736231243643!5m2!1sen!2sin"
            title="Google Maps showing our office location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <div className="contact-address">
        <div>
          <svg viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className='contact-add'>Chintamani Market, Hajipur, Vaishali.</span>
        </div>

        <div>
          <svg viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27c1.2.41 2.5.63 3.83.63a1 1 0 0 1 1 1v3.54a1 1 0 0 1-1 1A19.92 19.92 0 0 1 2 4a1 1 0 0 1 1-1h3.54a1 1 0 0 1 1 1c0 1.33.22 2.63.63 3.83a1 1 0 0 1-.27 1.11l-2.2 2.2z"/>
          </svg>
          <span className='contact-phone'>+91 9994568342, +91 9994568563</span>
        </div>

        <div>
          <svg viewBox="0 0 24 24">
            <path d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm.5-10h-1v5l4.25 2.52.75-1.23-3.5-2.09z"/>
          </svg>
          <span className='contact-timing'>Opening Time - 10:00 AM Closing Time - 7:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
