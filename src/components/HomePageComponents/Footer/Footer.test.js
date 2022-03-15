import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer.jsx";

describe("Testing footer", () => {
  test("Render footer section on the page", () => {
    //Arrange
    render(
      <Router>
        <Footer />
      </Router>
    );
    //Act
    const footer = screen.getByTestId("footer");
    //Assert
    expect(footer).toBeInTheDocument();
  });

  test("Render button on the page", () => {
    //Arrange
    render(
      <Router>
        <Footer />
      </Router>
    );
    //Act
    const button = screen.getByTestId("button");
    //Assert
    expect(button).toBeInTheDocument();
  });
});
