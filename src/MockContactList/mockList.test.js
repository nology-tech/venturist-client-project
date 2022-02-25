import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactsList from "./mockList";

it("should render the contacts list", () => {
  // 1. Arrange
  render(<ContactsList />);

  // 2. Act
  const contactsList = screen.getByTestId("page");

  // 3. Assert
  expect(contactsList).toBeInTheDocument();
});

it("if user presses delete button, the contact no longer appears on the screen", () => {
  // 1. Arrange
  render(<ContactsList />);

  // 2. Act
  const contactsList = screen.getByTestId("page");
  let contact = screen.getAllByTestId("item-grid");
  const deleteButton = screen.getAllByTestId("delete-button");
  userEvent.click(deleteButton[0]);

  // 3. Assert
  expect(contactsList).not.toContain(contact[0]);
});
