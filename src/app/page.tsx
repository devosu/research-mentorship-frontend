// @app/page.tsx
//
// 'research.osu.dev' homepage definition.

// NextJS essential imports.

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';
import DefaultCarousel from '@components/DefaultCarousel';

export default function Homepage () {
  return (
    <main>
      <DefaultHeader/>
      <DefaultCarousel/>
      <DefaultFooter/>
    </main>
  );
}
