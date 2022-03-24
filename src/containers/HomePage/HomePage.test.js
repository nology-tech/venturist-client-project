import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing HomePage section", () => {
  test("Render HomePage on the page", () => {
    //Arrange
    render(
      <Router>
        <HomePage />
      </Router>
    );
    //Act
    const homePagesection = screen.getByTestId("homePage");
    //Assert
    expect(homePagesection).toBeInTheDocument();
  });
});
