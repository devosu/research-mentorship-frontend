// @app/page.tsx
//
// 'research.osu.dev' homepage definition.

// NextJS essential imports.

import DefaultCarousel from "@components/DefaultCarousel";
// Local imports.
import DefaultFooter from "@components/DefaultFooter";
import DefaultHeader from "@components/DefaultHeader";

export default function Homepage() {
  return (
    <main>
      <DefaultHeader />
      <DefaultCarousel />
      <DefaultFooter />
    </main>
  );
}
