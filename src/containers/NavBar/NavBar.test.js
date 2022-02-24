import { getAllByTestId, render,screen } from "@testing-library/react";
import Navbar from "./NavBar";

const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts","Deposit"];

describe("Testing the Navbar", () => {

  test("Check to see if Navbar Renders", () => {
    // Arrange
    render(<Navbar />);

    // Act
    const navbar = screen.getByTestId("navbar");
    // Assert
    expect(navbar).toBeInTheDocument();

  })

  test("Check if Nav Item Renders", () => {
    // Arrange
    render(<Navbar />);

    // Act
    const navItems = screen.getAllByTestId("navItem");

    for (let i = 0; i < buttonLabels.length; i++) {
      expect(navItems[i]).toBeInTheDocument();
      expect(navItems[i]).toHaveTextContent(buttonLabels[i]);
    }
  })

  test("Check to see if Header Renders", () => {
    // Arrange
    render(<Navbar />);

    // Act
    const header = screen.getAllByRole("heading");

    // Assert
    expect(header[0]).toHaveTextContent("VENTURIST")
  })

  test("Check for all button headers", () => {
    // Arrange
    render(<Navbar />);

    // Act
    const header = screen.getAllByRole("heading");

    // Assert
    for (let i = 1; i < header.length; i++)
    expect(header[i]).toHaveTextContent(buttonLabels[i-1]);
  })

})