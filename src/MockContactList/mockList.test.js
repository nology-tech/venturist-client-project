import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactsList from "./mockList";


it("should render the contacts list", () => {
  // 1. Arrange
  render(<ContactsList  />)

  // 2. Act
 const contactsList = screen.getByTestId("page")

  // 3. Assert
 expect(contactsList).toBeInTheDocument()
});

