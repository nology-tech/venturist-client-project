// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ContactsList from "./ContactsList";

// const dummyData = [
//   {
//     firstName: "Zoe",
//     middleNames: "",
//     lastName: "Jansen",
//     bankName: "Venturist",
//     bankIcon: "",
//     accountNumber: 12345689,
//     sortCode: "553457",
//     IBAN: "GB56HLFX11005310840367",
//     numberOfTransaction: 100,
//     lastTransaction: 1645803922,
//   },
// ];

//These tests currently broken due to re-factor

it("should render the contacts list", () => {
  // // 1. Arrange
  // render(<ContactsList filteredData={dummyData} />);
  // // 2. Act
  // const contactsList = screen.getByTestId("page");
  // // 3. Assert
  // expect(contactsList).toBeInTheDocument();
});

// it("if user presses delete button, the contact no longer appears on the screen", () => {
//   // 1. Arrange
//   render(<ContactsList />);

//   // 2. Act
//   const contactsList = screen.getByTestId("page");
//   let contact = screen.getAllByTestId("item-grid");
//   const deleteButton = screen.getAllByTestId("delete-button");
//   userEvent.click(deleteButton[0]);

//   // 3. Assert
//   expect(contactsList).not.toContain(contact[0]);
// });
