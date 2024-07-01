// ./__tests__/components/DefaultLoginForm.test.tsx
//
// Snapshot tests for the DefaultLoginForm component.

// jsdom-jest testing essential imports.
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

// Local testing module imports.
import DefaultLoginForm from "@components/DefaultLoginForm";

// Behavior for the DefaultLoginForm component.
describe("The default login form component", () => {
  it("renders a form element", () => {
    const { container } = render(<DefaultLoginForm />);
    expect(container.querySelector("form")).toBeDefined();
  });

  it("matches the snapshot", () => {
    const { container } = render(<DefaultLoginForm />);
    expect(container).toMatchSnapshot();
  });
});
