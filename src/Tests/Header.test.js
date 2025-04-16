import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Components/Header";
import "@testing-library/jest-dom";

test("renders logo in the header", () => {
  render(<Header />);
  const logoElement = screen.getByAltText(/Asikh Farms Logo/i);
  expect(logoElement).toBeInTheDocument();
});


test("renders navigation links correctly", () => {
  render(<Header />);

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About us/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
  expect(screen.getByText(/Order Now/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
});


test("renders WhatsApp link with correct text", () => {
  render(<Header />);
  const whatsappText = screen.getByText(/WhatsApp/i);
  expect(whatsappText).toBeInTheDocument();
});


test("menu icon toggles navigation links visibility", () => {
  render(<Header />);
  const menuIcon = screen.getByTestId("menu-icon");
  const navLinks = screen.getByRole("navigation");

  expect(navLinks).not.toHaveClass("open");

  fireEvent.click(menuIcon);
  expect(navLinks).toHaveClass("open");

  fireEvent.click(menuIcon);
  expect(navLinks).not.toHaveClass("open");
});
