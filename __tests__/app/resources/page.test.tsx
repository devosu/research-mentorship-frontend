// ./__tests__/app/resources/page.test.tsx
//
// Snapshot tests for the reources page.

// jsdom-jest essential imports.
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

// Local testing module imports.
import Resources from "@app/resources/page";

// Behavior for the resources page.
describe("The resources page", () => {
  it("renders a table element", () => {
    const { container } = render(<Resources />);
    expect(container.querySelector("table")).toBeDefined();
  });

  it("matches the snapshot", () => {
    const { container } = render(<Resources />);
    expect(container).toMatchSnapshot();
  });
});
