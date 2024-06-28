// Unit tests for DefaultFooter component.

// Testing essential imports.
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

// Local imports.
import DefaultFooter from "@src/components/DefaultFooter";

// Behavior for the DefaultFooter component.
describe("The default footer component", () => {
  it("renders a footer element", () => {
    const { container } = render(<DefaultFooter />);
    expect(container.querySelector("footer")).toBeDefined();
  });

  it("matches the snapshot", () => {
    const { container } = render(<DefaultFooter />);
    expect(container).toMatchSnapshot();
  });
});
