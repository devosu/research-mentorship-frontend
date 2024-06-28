// @app/apply-mentee/page.tsx
//
// 'research.osu.dev' mentor application page definition.

"use client";
// NextJS essential imports.
import { useEffect, useState } from "react";

// Local imports.
import DefaultFooter from "@components/DefaultFooter";
import DefaultHeader from "@components/DefaultHeader";
import { navigate } from "@src/app/actions";
import { submitMenteeApplication } from "@src/lib/firebaseDb";
import { auth } from "@src/lib/firebaseInit";

export default function ApplyMentee() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/signin");
      }
    });
  }, []);

  function submitApplication() {
    // var name = (document.getElementById('menteeName') as HTMLInputElement).value;
    // var year = (document.getElementById('menteeYear') as HTMLInputElement).value;
    // var major = (document.getElementById('menteeMajor') as HTMLInputElement).value;
    var researchField = (
      document.getElementById("menteeResearchField") as HTMLInputElement
    ).value;

    console.log("Attempting application submission");
    auth.onAuthStateChanged((user) => {
      if (user) {
        try {
          submitMenteeApplication(researchField, user.uid);
        } catch (e) {
          console.log(e);
        }
      }
    });
  }

  return (
    <main>
      <DefaultHeader />
      <div className="container mx-auto p-4">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-1 gap-8 text-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">Aspiring Mentees</h2>
            <p className="mb-4">
              If you're ready to find research best suited for you, you've come
              to the right place.
            </p>
            <p className="mb-4">
              Before scheduling a meeting with a mentor, make sure you have
              established a few things:
            </p>
            <p className="mb-4">
              - Field(s) that you're interested in pursuing research in
            </p>
            <p className="mb-4">
              - What you desire to achieve through research
            </p>
            <p className="mb-4">
              - Any additional criteria you may desire from your research
              experience (ie credits, pay, etc)
            </p>
            <p className="mb-4">
              - Your pre-professional path and how that may correlate with your
              interests
            </p>
            <p className="mb-4">
              These are important points of consideration when choosing a lab to
              join, but don't worry, we have it organized in the application
              below for you:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">
              Mentee Application
            </h2>
            <p className="mb-4">
              Aspiring mentees can list their details below to be matched with a
              mentor who can help them achieve their research goals.
            </p>
            <form id="menteeForm" className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  title="Name"
                  type="text"
                  id="menteeName"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-gray-700">Year</label>
                <input
                  title="Year"
                  type="text"
                  id="menteeYear"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-gray-700">Major</label>
                <input
                  title="Major"
                  type="text"
                  id="menteeMajor"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-gray-700">
                  Desired Research Field
                </label>
                <input
                  title="Desired Research Field"
                  type="text"
                  id="menteeResearchField"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></input>
              </div>
              <button
                type="button"
                onClick={submitApplication}
                className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </main>
  );
}
