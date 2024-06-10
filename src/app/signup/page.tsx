// @app/signup/page.tsx
//
// 'research.osu.dev' account creation definition.

// NextJS essential imports.

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';
import DefaultRegisterForm from '@components/DefaultRegisterForm';

export default function SignUp () {
  return (
    <main>
      <DefaultHeader/>
      <DefaultRegisterForm/>
      <DefaultFooter/>
    </main>
  );
}