// @app/dashboard/page.tsx
//
// 'research.osu.dev' dashboard page definition.

// NextJS essential imports.

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';

export default function Dashboard () {
  return (
    <main>
        <DefaultHeader/>
        <DefaultFooter/>
    </main>
  );
}