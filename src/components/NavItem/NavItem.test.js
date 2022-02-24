import { render, screen } from "@testing-library/react";
import NavItem from "./NavItem";

describe("Tests for NavItem Rendering", () => {

  test("Should Render a Nav Item", () => {
    render(<NavItem label="test" handleClick={()=>{}} activeButton= ""/> );

    const navItem = screen.getByTestId("navItem");

    expect(navItem).toBeInTheDocument;
  })

  test("Should Render Provided Text", () => {

    // Arrange
    render(<NavItem label="test" handleClick={()=>{}} activeButton= ""/> );

    // Act
    const navItem = screen.getByText("test");

    // Assert
    expect(navItem).toHaveTextContent("test");


  })

  test("Should Render Active, when Active", () => {
    // Arrange
    render(<NavItem label="test" handleClick={()=>{}} activeButton= "test"/>);
    // Act
    const navItem = screen.getByText("test");
    // Assert
    expect(navItem.parentElement.className).toContain("navbar__nav-item--active");
  })

})