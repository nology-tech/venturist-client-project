import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-test-renderer";
import LiveRates from "./LiveRates";

test("Test that LiveRates renders with default props", async () => {
  // Arrange
  render(<LiveRates />);
  let table;
  //Act
  await waitFor(() => {
    table = screen.getByTestId("liverate-loading");
  });
  //Assert
  act(() => {
    expect(table).toBeInTheDocument();
    expect(table).toContainElement(table);
  });
});
