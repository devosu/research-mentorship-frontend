// ./__tests__/components/DefaultRegisterForm.test.tsx
//
// Snapshot tests for the DefaultRegisterForm component.

// jsdom-jest testing essential imports.
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

// Local testing module imports.
import DefaultRegisterForm from "@components/DefaultRegisterForm";

// Behavior for the DefaultRegisterForm component.
describe("The default register form component", () => {
  it("renders a form element", () => {
    const { container } = render(<DefaultRegisterForm />);
    expect(container.querySelector("form")).toBeDefined();
  });

  it("matches the snapshot", () => {
    const { container } = render(<DefaultRegisterForm />);
    expect(container).toMatchSnapshot();
  });
});
