import { render, screen } from "@testing-library/react";
import Section from "./Section";
import imgConversion from "../../../assets/images/convert.png";

describe("Testing section", () => {
  test("Render section on the page", () => {
    //Arrange
    render(
      <Section
        title="Make a Conversion"
        bgColour="blue"
        name="Conversion Table"
        img={imgConversion}
      />
    );
    //Act
    const section = screen.getByTestId("section");
    //Assert
    expect(section).toBeInTheDocument();
  });
});
