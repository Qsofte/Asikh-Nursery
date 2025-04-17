import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../Pages/Contact';

const renderContact = () =>
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

describe('Contact Component', () => {
  beforeEach(() => {

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    jest.spyOn(window, 'open').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders breadcrumb link and page title', () => {
    renderContact();
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const pageTitle = screen.getByRole('heading', { name: /Contact Us/i });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/home');
    expect(pageTitle).toBeInTheDocument();
  });

  test('shows alert when submitting empty form fields', () => {
    renderContact();
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitBtn);
    expect(window.alert).toHaveBeenCalledWith('Please fill in all fields.');
    expect(window.open).not.toHaveBeenCalled();
  });

  test('opens whatsapp link and resets fields on valid submission', () => {
    renderContact();
    const nameInput = screen.getByLabelText(/Name/i);
    const mobileInput = screen.getByLabelText(/Phone Number/i);
    const messageTextarea = screen.getByLabelText(/Comment Box/i);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(mobileInput, { target: { value: '1234567890' } });
    fireEvent.change(messageTextarea, { target: { value: 'Hello there!' } });

    fireEvent.click(submitBtn);

    const expectedUrl =
      'https://wa.me/?text=' +
      encodeURIComponent('Full Name: John Doe\nMobile: 1234567890\nMessage: Hello there!');

    expect(window.open).toHaveBeenCalledWith(expectedUrl, '_blank');
    expect(window.alert).toHaveBeenCalledWith('Your message has been sent successfully!');


    expect(nameInput.value).toBe(' ');
    expect(mobileInput.value).toBe(' ');
    expect(messageTextarea.value).toBe(' ');
  });

  test('renders embedded map iframe', () => {
    renderContact();
    const map = screen.getByTitle(/Google Maps showing our office location/i);
    expect(map).toBeInTheDocument();
  });

  test('renders contact details sections', () => {
    renderContact();
    expect(screen.getByText(/Chintamani Market, Hajipur, Vaishali./i)).toBeInTheDocument();
    expect(screen.getByText(/\+91 9994568342, \+91 9994568563/i)).toBeInTheDocument();
    expect(screen.getByText(/Opening Time - 10:00 AM Closing Time - 7:00 PM/i)).toBeInTheDocument();
  });
});
