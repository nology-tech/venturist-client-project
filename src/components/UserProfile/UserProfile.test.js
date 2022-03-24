import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

it("should render the user profile", () => {
  // 1. Arrange
  render(<UserProfile />);

  // 2. Act
  const usersProfile = screen.getAllByTestId("user");

  // 3. Assert
  expect(usersProfile[0]).toBeInTheDocument();
});
