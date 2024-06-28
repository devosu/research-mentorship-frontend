// ./__tests__/app/layout.test.tsx
//
// Snapshot test for the gloabl layout, DO NOT update,
// unless you know what you are doing.

// Testing essential imports.
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

// Local imports.
import RootLayout from "@app/layout";

// Test suite.
describe("The RootLayout", () => {
  it("correctly renders children", () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child Text</div>
      </RootLayout>,
    );
    expect(container).toMatchSnapshot();
  });
});
