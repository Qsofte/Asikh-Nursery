import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from "../Components/Footer";
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders footer location text', () => {
    render(<Footer />);
    const locationText = screen.getByText(/Visit us at Chintamani market/i);
    expect(locationText).toBeInTheDocument();
  });

  test('renders "Order Online" and "Contact Us" buttons', () => {
    render(<Footer />);
    
    const links = screen.getAllByRole('link', { name: /Contact Us/i });

    const orderBtn = screen.getByRole('link', { name: /Order Online/i });
    const contactBtn = links[0];

    expect(orderBtn).toBeInTheDocument();
    expect(contactBtn).toBeInTheDocument();
  });

  test('renders footer logo image', () => {
    render(<Footer />);
    const logoImg = screen.getByAltText('Logo');
    expect(logoImg).toBeInTheDocument();
  });

  test('renders "Links" section', () => {
    render(<Footer />);
    const aboutLink = screen.getByRole('link', { name: /About Us/i });
    const servicesLink = screen.getByRole('link', { name: /Our Services/i });
    const orderLink = screen.getByRole('link', { name: /Order Now/i });

    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(orderLink).toBeInTheDocument();
  });

  test('renders social media icons with alt texts', () => {
    render(<Footer />);
    const whatsappIcon = screen.getByAltText(/WhatsApp/i);
    const instaIcon = screen.getByAltText(/Instagram/i);
    const linkedinIcon = screen.getByAltText(/Linkedin/i);

    expect(whatsappIcon).toBeInTheDocument();
    expect(instaIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<Footer />);
    const copyright = screen.getByText(/© 2025 Asikh Nursery LLC/i);
    expect(copyright).toBeInTheDocument();
  });
});
