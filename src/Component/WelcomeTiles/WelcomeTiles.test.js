import { getByTestId, render,screen } from "@testing-library/react";
import WelcomeTiles from "./WelcomeTiles";


it("should render welcome tiles", () => {
  // 1. Arrange
 render(<WelcomeTiles/>)

 //ACT

 const  welcomeTiles = screen.getByTestId("welcome-tiles")

 // 3. Assert
expect(welcomeTiles).toBeInTheDocument()
});