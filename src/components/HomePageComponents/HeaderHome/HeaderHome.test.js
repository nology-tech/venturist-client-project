import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderHome from "./HeaderHome";

describe("Testing header", () => {
  // describe("Testing the Navbar", () => {

  test("Render header section on the page", () => {
    //Arrange
    render(
      <Router>
        <HeaderHome />
      </Router>
    );
    //Act
    const header = screen.getByTestId("headerHome");
    //Assert
    expect(header).toBeInTheDocument();
  });

  test("Render button on the page", () => {
    //Arrange
    render(
      <Router>
        <HeaderHome />
      </Router>
    );
    //Act
    const button = screen.getByText(/Sign in/i);

    //Assert
    expect(button).toBeInTheDocument();
  });
});
