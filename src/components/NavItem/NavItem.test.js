import { render, screen } from "@testing-library/react";
import NavItem from "./NavItem";
import {BrowserRouter as Router} from "react-router-dom";

describe("Tests for NavItem Rendering", () => {

  test("Should Render a Nav Item", () => {
    render(
      <Router>
        <NavItem label="test" handleClick={()=>{}} activeButton= ""/>
      </Router> 
    );

    const navItem = screen.getByTestId("navItem");

    expect(navItem).toBeInTheDocument();
  })

  test("Should Render Provided Text", () => {

    // Arrange
    render(
      <Router>
        <NavItem label="test" handleClick={()=>{}} activeButton= ""/> 
      </Router>
    );

    // Act
    const navItem = screen.getByText("test");

    // Assert
    expect(navItem).toHaveTextContent("test");

  })

})