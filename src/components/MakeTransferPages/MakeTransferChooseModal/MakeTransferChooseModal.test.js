import MakeTransferChooseModal from "./MakeTransferChooseModal";
import liveRateData from "../../../assets/data/liveRatesExample";
import contactData from "./../../../assets/data/contactExample";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Render components, currency", () => {
  test("Render the component", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Currency"
        content={liveRateData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const header = screen.getByText("Choose Currency");

    expect(header).toBeInTheDocument();
  });

  test("Render the magnifying glass", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Currency"
        content={liveRateData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const magnifyingGlass = screen.getByTitle("Search");

    expect(magnifyingGlass).toBeInTheDocument();
  });

  test("Render currency column heading", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Currency"
        content={liveRateData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const currency = screen.getByText("Currency");

    expect(currency).toBeInTheDocument();
  });

  test("Render rate column heading", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Currency"
        content={liveRateData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const rate = screen.getByText("Rate");

    expect(rate).toBeInTheDocument();
  });

  test("Render currency list (Check one item)", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Currency"
        content={liveRateData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const rate = screen.getByText("British Pound");

    expect(rate).toBeInTheDocument();
  });
});

describe("Functionality tests, currency", () => {
  test("Cross should have a function", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Currency"
        content={liveRateData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const cross = screen.getAllByRole("img")[0];
    fireEvent.click(cross);

    expect(onClick).toHaveBeenCalled();
  });

  test("Function fires on search box input, and search box contains expected input", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Currency"
        content={liveRateData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const search = screen.getByPlaceholderText("Search...");
    userEvent.type(search, "Hello");

    expect(onSearch).toHaveBeenCalled();
    expect(search.value).toBe("Hello");
  });
});

describe("Render components, recipient", () => {
  test("Render the component", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Recipient"
        content={contactData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const header = screen.getByText("Choose Recipient");

    expect(header).toBeInTheDocument();
  });

  test("Render the magnifying glass", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Recipient"
        content={contactData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const magnifyingGlass = screen.getByTitle("Search");

    expect(magnifyingGlass).toBeInTheDocument();
  });

  test("Expect sort column header to render", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Recipient"
        content={contactData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const sortCode = screen.getByText("Sort Code");

    expect(sortCode).toBeInTheDocument();
  });

  test("Expect name column header to render", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Recipient"
        content={contactData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const name = screen.getByText("Name");

    expect(name).toBeInTheDocument();
  });

  test("Expect account number column header to render", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Recipient"
        content={contactData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const accountNumber = screen.getByText("Account No");

    expect(accountNumber).toBeInTheDocument();
  });

  test("Expect user list to render, test singular name", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Recipient"
        content={contactData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const name = screen.getByText("Zoe Jansen");

    expect(name).toBeInTheDocument();
  });

  test("Expect text to render when empty list of contacts", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Recipient"
        content={[]}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const emptyListText = screen.getByText("No results found.");

    expect(emptyListText).toBeInTheDocument();
  });
});

describe("Functionality tests, recipient", () => {
  test("Cross should have a function", () => {
    const onClick = jest.fn();
    const onSearch = jest.fn();
    render(
      <MakeTransferChooseModal
        type="Recipient"
        content={contactData}
        handleEvent={onClick}
        handleSearch={onSearch}
        handleShowModal={onClick}
      />
    );

    const cross = screen.getAllByRole("img")[0];
    fireEvent.click(cross);

    expect(onClick).toHaveBeenCalled();
  });
});
