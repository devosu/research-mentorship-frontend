// Path: <rootDir>/src/pages/Yakob.test.js
import React from "react";
import Yakob from "./Yakob";
import { render, screen } from "@testing-library/react";

describe("Example Component", () => {
  it("should render", () => {
    render(<Yakob />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Groups")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
  });
});
