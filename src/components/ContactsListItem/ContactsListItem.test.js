import { render, screen } from "@testing-library/react";
import ListItem from "./ContactsListItem";
const testfile = [
  {
    firstName: "Roberto",
    lastName: "Hoopero",
    bankName: "Bank of New Zealand",
    bankIcon:
      "https://pbs.twimg.com/profile_images/1295470695321726976/GtLcinlv_400x400.jpg",
    sortCode: "123456",
    IBAN: "GB56HLFX11005310840366",
    numberOfTransaction: 58,
    lastTransaction: 1645548731658,
    accountNumber: 10950345,
  },
  {
    firstName: "Will",
    lastName: "Boosby",
    bankName: "Bank of _nology",
    bankIcon: "https://avatars.githubusercontent.com/u/43138473?s=280&v=4",
    sortCode: "050059",
    IBAN: "GB56HLFX11005310840266",
    numberOfTransaction: 2,
    lastTransaction: 1645548731321,
    accountNumber: 10950363,
  },
];

it("should render the contacts list item", () => {
  // 1. Arrange
  render(
    <ListItem
      item={testfile[0]}
      index={0}
      key={0}
      setFilteredData={() => {}}
      filteredData={testfile}
    />
  );

  // 2. Act
  const contact = screen.getAllByTestId("item-grid");

  // 3. Assert
  expect(contact[0]).toBeInTheDocument();
});
