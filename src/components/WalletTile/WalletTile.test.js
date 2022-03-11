import { render, screen } from "@testing-library/react";
import WalletTile from "./WalletTile";

describe("Testing wallet tile", () => {
  test("Should render wallet tile", () => {
    render(<WalletTile currencyAmount={100} currencySymbol="" currencyCode="" currencyName=""/>)

    expect(screen.getByTestId("tiles")).toBeInTheDocument()
  })

  test("Render props given", () => {
    render(<WalletTile currencyAmount={100} currencySymbol="$" currencyCode="A" currencyName="B"/>)

    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  })
})



