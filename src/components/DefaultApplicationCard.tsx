// @components/DefaultMentorCard
//
// DefaultMentorCard component definition.

// NextJS essential imports.

// Local imports.
 import { db } from '@src/lib/firebaseInit';
 import { doc, setDoc, getDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"; 

interface Props {
    id: string,
    name?: string
    major?: string
    desiredResearchField?: string
    type?: string
    currentResearchField?: string
    currentResearchFieldDescription?: string
  }

export default function DefaultApplicationCard (props: Props) {

    async function acceptApplication() {
        const docRef = doc(db, "applications", props.id);
        await updateDoc(docRef, {
            adminApproved: true
          });
    }

    async function rejectApplication() {
        const docRef = doc(db, "applications", props.id);
        await updateDoc(docRef, {
            adminApproved: false
          });
    }

    return (
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold">Name: {props.name}</h2>
                <p className="mt-2">type: {props.type}</p>
                <p className="mt-2">Major: {props.major}</p>
                <p className="mt-2">Desired Research Field: {props.currentResearchField}</p>
                <button
                onClick={acceptApplication}
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Accept
                </button>
                <button
                onClick={rejectApplication}
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Reject
                </button>
            </div>
    );
    }