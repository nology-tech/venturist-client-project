import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("Testing userProfile Component", () => {

  it("should render the user profile", () => {
    // 1. Arrange
    render(<UserProfile />);

    // 2. Act
    const usersProfile = screen.getAllByTestId("user");

    // 3. Assert
    expect(usersProfile[0]).toBeInTheDocument();
  });

  it("should display a placeholder when no data is given", () => {
    render(<UserProfile profileData={false} />)

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Should display given firstname and lastname in profileData", () => {
    const mock = {
      firstName: "test",
      lastName: "test"
    }
    render(<UserProfile profileData={mock} />)

    expect(screen.getByText("test test")).toBeInTheDocument();
  });
})
