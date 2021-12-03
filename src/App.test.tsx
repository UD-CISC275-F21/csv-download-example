import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Download CSV button", () => {
    render(<App />);
    const linkElement = screen.getByText(/Download CSV/i);
    expect(linkElement).toBeInTheDocument();
});
