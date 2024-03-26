// ./src/components/example.test.js
//
// Example unit test for the Example component.
import React from "react";
import Example from "./example";
import { render, screen } from "@testing-library/react";

describe("Example", () => {
  it("should render", () => {
    render(<Example />);
    expect(screen.getByText("Example Component")).toBeInTheDocument();
  });
});
