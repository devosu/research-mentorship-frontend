// @app/signin/page.tsx
//
// 'research.osu.dev' account login definition.

'use client';
// NextJS essential imports.

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';
import DefaultLoginForm from '@components/DefaultLoginForm';

export default function SignIn () {
  return (
    <main>
      <DefaultHeader/>
      <DefaultLoginForm/>
      <DefaultFooter/>
    </main>
  );
}