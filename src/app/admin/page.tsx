// @app/admin/page.tsx
//
// 'research.osu.dev' admin page definition.

// NextJS essential imports.

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';

export default function Admin () {
  return (
    <main>
        <DefaultHeader/>
        <DefaultFooter/>
    </main>
  );
}