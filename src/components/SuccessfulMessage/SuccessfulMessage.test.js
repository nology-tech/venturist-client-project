import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SuccessfulMessage from "./SuccessfulMessage.jsx";

it("should render the sucess message profile", () => {
  // 1. Arrange
  render(
    <BrowserRouter>
      <SuccessfulMessage />
    </BrowserRouter>
  );

  // 2. Act
  const successMessage = screen.getAllByTestId("success");

  // 3. Assert
  expect(successMessage[0]).toBeInTheDocument();
});
