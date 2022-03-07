import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MakeTransferChooseRecipient from "./MakeTransferChooseRecipient";
import contactData from "../../../assets/data/contactExample";



describe ("Testing that elements render on screen", () => {
    test("Test to render container on screen", () => {
      // Arrange
      render(<MakeTransferChooseRecipient userCardList = {contactData} toggleChooseRecipients={()=> {}}/>);
      // Act
      const container = screen.getByTestId("chooseRecipientContainer");
      // Assert
      expect(container).toBeInTheDocument();
    });

  });
