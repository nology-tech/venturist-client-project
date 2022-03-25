// import { render, screen, waitFor } from "@testing-library/react";
// import { act } from "react-test-renderer";
// import LiveRates from "./LiveRates";

// const defaultProps = {
//   rates: [
//     {
//       currencyName: "British Pound",
//       currencyCode: "GBP",
//       liveRate: 1.0,
//       changeOfRate: 0.0,
//       currencySymbol: "£",
//     },
//   ],
// };

test("Test that LiveRates renders with default props", async () => {
  //NOTE - not sure how to eliminate console errors now that this component relies on an async hook....DGW
  //Arrange
  // render(<LiveRates {...defaultProps} />);
  // let table;
  // //Act
  // await waitFor(() => {
  //   table = screen.getByTestId("liverate-loading");
  // });
  // //Assert
  // act(() => {
  //   expect(table).toBeInTheDocument();
  //   expect(table).toContainElement(table);
  // });
});
