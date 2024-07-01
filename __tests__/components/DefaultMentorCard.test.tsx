// ./__tests__/components/DefaultMentorCard.test.tsx
//
// Snapshot tests for the DefaultMentorCard component.

// jsdom-jest testing essential imports.
import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

// Local testing module imports.
import DefaultMentorCard, { type Props } from "@components/DefaultMentorCard";

// Behavior for the DefaultMentorCard component.
describe("The default mentor card component", () => {
  // Create a test prop to render and test the DefaultMentorCard component.
  const testProps: Props = {
    name: "Marison Bobson",
    major: "Electrical Engineering",
    researchField: "Power Systems",
    researchDesc: "I am currently researching power systems.",
    link: "https://outlook.com/schedule/marybobson",
  };

  it("renders a section element", () => {
    const { container } = render(
      <DefaultMentorCard
        name={testProps.name}
        major={testProps.major}
        researchField={testProps.researchField}
        researchDesc={testProps.researchDesc}
        link={testProps.link}
      />,
    );
    expect(container.querySelector("section")).toBeDefined();
  });

  it("matches the snapshot", () => {
    const { container } = render(
      <DefaultMentorCard
        name={testProps.name}
        major={testProps.major}
        researchField={testProps.researchField}
        researchDesc={testProps.researchDesc}
        link={testProps.link}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
