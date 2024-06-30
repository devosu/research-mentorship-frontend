// ./__tests__/app/page.test.tsx
//
// Snapshot tests for the Homepage.

// jsdom-jest essential imports.
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

// Local testing module imports.
import Homepage from "@app/page";

// Behavior for the Homepage component.
describe("The homepage component", () => {
  it("renders a main element", () => {
    const { container } = render(<Homepage />);
    expect(container.querySelector("main")).toBeDefined();
  });

  it("matches the snapshot", () => {
    const { container } = render(<Homepage />);
    expect(container).toMatchSnapshot();
  });
});
