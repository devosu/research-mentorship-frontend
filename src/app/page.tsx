// @app/page.tsx
//
// 'research.osu.dev' homepage definition.

// NextJS essential imports.

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';

export default function Homepage () {
  return (
    <main>
      <DefaultHeader/>
      <h1>
        Research Mentorship Program Homepage
      </h1>
      <p>
        Hello world!
      </p>
      <DefaultFooter/>
    </main>
  );
}
