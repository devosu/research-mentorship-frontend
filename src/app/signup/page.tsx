// @app/signup/page.tsx
//
// 'research.osu.dev' account creation definition.

'use client';
// NextJS essential imports.
import { useEffect } from "react";

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';
import DefaultRegisterForm from '@components/DefaultRegisterForm';
import { auth } from "@src/lib/firebaseInit";
import { navigate } from "@src/app/actions";


export default function SignUp () {

  // useEffect(() => {
	// 	auth.onAuthStateChanged(function(user) {
	// 		if (user) {
  //       navigate('/');
	// 		}
	// 	  });
	// }, []);

  return (
    <main>
      <DefaultHeader/>
      <DefaultRegisterForm/>
      <DefaultFooter/>
    </main>
  );
}