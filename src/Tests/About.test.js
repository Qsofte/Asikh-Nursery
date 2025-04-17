import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../Pages/About';

const renderAbout = () =>
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

describe('About Component', () => {
  test('renders breadcrumb link and current page label', () => {
    renderAbout();
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const aboutLabel = screen.getByText(/About Us/i);

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/home');
    expect(aboutLabel).toBeInTheDocument();
  });

  test('renders section headings', () => {
    renderAbout();
    expect(screen.getByRole('heading', { name: /Our Story/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Our Vision/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Our Mission/i })).toBeInTheDocument();
  });

  test('renders all key images', () => {
    renderAbout();

    const gardenImages = screen.getAllByAltText(/Garden/i);
    expect(gardenImages.length).toBeGreaterThanOrEqual(2);

    expect(screen.getByAltText(/Pots/i)).toBeInTheDocument();

    const plantImages = screen.getAllByAltText(/Plants/i);
    expect(plantImages.length).toBeGreaterThanOrEqual(1);
  });
});
