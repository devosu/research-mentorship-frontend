// ./__tests__/components/DefaultApplicationCard.test.tsx
//
// Snapshot tests for the DefaultApplicationCard component.

// jsdom-jest essential imports.
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

// Local testing module imports.
import DefaultApplicationCard, {
  type Props,
} from "@components/DefaultApplicationCard";

// Behavior for the DefaultApplicationCard component.
describe("The default application card component", () => {
  // Setup a test prop to render the DefaultApplicationCard component.
  const testProps: Props = {
    id: "1",
    name: "John Doe",
    major: "Computer Science",
    desiredResearchField: "Machine Learning",
    type: "Undergraduate",
    currentResearchField: "Computer Vision",
    currentResearchFieldDescription:
      "I am currently researching computer vision.",
  };

  it("renders a div element", () => {
    const { container } = render(
      <DefaultApplicationCard
        id={testProps.id}
        name={testProps.name}
        major={testProps.major}
        desiredResearchField={testProps.desiredResearchField}
        type={testProps.type}
        currentResearchField={testProps.currentResearchField}
        currentResearchFieldDescription={
          testProps.currentResearchFieldDescription
        }
      />,
    );
    expect(container.querySelector("div")).toBeDefined();
  });

  it("matches the snapshot", () => {
    const { container } = render(
      <DefaultApplicationCard
        id={testProps.id}
        name={testProps.name}
        major={testProps.major}
        desiredResearchField={testProps.desiredResearchField}
        type={testProps.type}
        currentResearchField={testProps.currentResearchField}
        currentResearchFieldDescription={
          testProps.currentResearchFieldDescription
        }
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
