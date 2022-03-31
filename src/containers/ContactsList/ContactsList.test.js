import { render, screen } from "@testing-library/react";
import ContactsList from "./ContactsList";

it("should render the contacts list", () => {
  // 1. Arrange
  render(<ContactsList />);

  // 2. Act
  const contactsList = screen.getByTestId("page");

  // 3. Assert
  expect(contactsList).toBeInTheDocument();
});
