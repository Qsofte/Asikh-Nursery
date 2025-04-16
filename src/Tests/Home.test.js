import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  test('renders main heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Buy Online: Greenery at your finger tips/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders "Buy Now" button', () => {
    render(<Home />);
    const buyNowButton = screen.getAllByText(/Buy Now/i);
    expect(buyNowButton.length).toBeGreaterThan(0);
  });

  test('renders WhatsApp button', () => {
    render(<Home />);
    const whatsappButton = screen.getByRole('link', { name: /Whatsapp/i });
    expect(whatsappButton).toBeInTheDocument();
    expect(whatsappButton).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });

  test('renders "Our Products" section', () => {
    render(<Home />);
    const productsTitle = screen.getByText(/Our Products/i);
    expect(productsTitle).toBeInTheDocument();
  });

  test('renders both "Plant care" sections', () => {
    render(<Home />);
    const plantCareHead = screen.getByText(/Plant care guide and advice/i);
    const knowMoreBtns = screen.getAllByText(/Know More/i);
    expect(plantCareHead).toBeInTheDocument();
    expect(knowMoreBtns.length).toBeGreaterThanOrEqual(2);
  });

  test('renders all images with alt text', () => {
    render(<Home />);
    const gardenImages = screen.getAllByAltText(/Garden/i);
    const productImages = screen.getAllByAltText(/Plants|Nature Img|Garden Tools/i);
    expect(gardenImages.length).toBeGreaterThan(0);
    expect(productImages.length).toBeGreaterThan(0);
  });
});
