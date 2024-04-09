// Path: <rootDir>/src/pages/Ziqi.test.js
import React from "react";
import Ziqi from "./Ziqi";
import { render, screen } from "@testing-library/react";

describe("Example Component", () => {
  it("should render", () => {
    render(<Ziqi />);
    expect(screen.getByText("HTML Code here")).toBeInTheDocument();
  });
});
