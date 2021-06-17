import React from "react";
import { render, screen, cleanup} from "./test-utils";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

afterEach(() => {
  cleanup();
});

describe("App component", () => {
  test("check Add Portfolio", () => {
    // Assert
    const placeNameString = screen.getByText(/Add Portfolio/i, {
      exact: false,
    });
    expect(placeNameString).toBeInTheDocument();
  });

  test("check Portfolio List", () => {
    // Assert
    const placeNameString = screen.getByText(/Portfolio List/i, {
      exact: false,
    });
    expect(placeNameString).toBeInTheDocument();
  });

  test("check PLACE NAME", () => {
    // Assert
    const placeNameString = screen.getByText(/PLACE NAME/i, { exact: false });
    expect(placeNameString).toBeInTheDocument();
  });

  test("check STREET", () => {
    // Assert
    const placeNameString = screen.getByText(/STREET/i, { exact: false });
    expect(placeNameString).toBeInTheDocument();
  });

  test("check NUMBER", () => {
    // Assert
    const placeNameString = screen.getByText(/NUMBER/i, { exact: false });
    expect(placeNameString).toBeInTheDocument();
  });

  test("check POSTAL CODE", () => {
    // Assert
    const placeNameString = screen.getByText(/POSTAL CODE/i, { exact: false });
    expect(placeNameString).toBeInTheDocument();
  });

  test("check MUNICIPALITY", () => {
    // Assert
    const placeNameString = screen.getByText(/MUNICIPALITY/i, { exact: false });
    expect(placeNameString).toBeInTheDocument();
  });

  test("check COORDINATES", () => {
    // Assert
    const placeNameString = screen.getByText(/COORDINATES/i, { exact: false });
    expect(placeNameString).toBeInTheDocument();
  });

  test('renders "open Create New Portfolio page" if Add Portfolio button was clicked', () => {
    // Act
    const buttonElement = screen.getByRole("button", {
      name: /Add Portfolio/i,
    });
    userEvent.click(buttonElement);

    // Assert
    screen.getByText(/Create New Portfolio/i);
    const outputElement = screen.getByText("Create New Portfolio");
    expect(outputElement).toBeInTheDocument();
    
  });

  test('renders top nav', () => {
    const stringElement = screen.getByText(/My Property Viewer/i);
    expect(stringElement).toBeInTheDocument();
  });

  
});
