// ./src/app/page.js
//
// Homepage for the event feed project.

// Next essential imports.
import Link from 'next/link';

// Initialized firebase component imports.
// import { app, db } from '@firebase/firebase';

/**
 * @returns {JSX.Element} Homepage for the event feed project.
 */
export default function Homepage() {
  // console.log(typeof app);
  // console.log(typeof db);
  return (
    <main>
      <div>
        <p>Welcome to home page for event feed!</p>
      </div>
      <Link href="/yakob">Go to Yakob&apos;s Page</Link>
      <br />
      <Link href="/ziqi">Go to Ziqi&apos;s Page</Link>
    </main>
  );
}
