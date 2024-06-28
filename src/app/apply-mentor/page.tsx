// @app/apply-mentor/page.tsx
//
// 'research.osu.dev' mentee application page definition.
"use client";
// NextJS essential imports.
import { useEffect } from "react";

// Local imports.
import DefaultFooter from "@components/DefaultFooter";
import DefaultHeader from "@components/DefaultHeader";
import { navigate } from "@src/app/actions";
import { auth } from "@src/lib/firebaseInit";

export default function ApplyMentor() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/signin");
      }
    });
  }, []);

  function submitForm() {
    var name = document.getElementById("mentorName")?.textContent;
    var year = document.getElementById("mentorYear")?.textContent;
    var major = document.getElementById("mentorMajor")?.textContent;
    var researchField = document.getElementById(
      "mentorResearchField",
    )?.textContent;
    var researchDescription = document.getElementById(
      "mentorResearchDescription",
    )?.textContent;
  }

  return (
    <main>
      <DefaultHeader />
      <div className="container mx-auto p-4">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-1 gap-8 text-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">Aspriring Mentors</h2>
            <p className="mb-4">
              Your role as a mentor is a simple but crucial one.
            </p>
            <p className="mb-4">
              It consists of helping fellow peers who desire to acquire research
              in the same or similar field as you, and guiding them through
              their journey. Here are some key points and questions to consider
              when mentoring:
            </p>
            <p className="mb-4">
              - Ensure that the mentee's goals are well established, in other
              words, why is the mentee interested in gaining research
              experience? It could be for mere exposure in a lab setting all the
              way to materializing an elaborate research project/ proposition
            </p>
            <p className="mb-4">
              - What are the mentee's fields of interest? Are they open to being
              involved in any field of research? Maybe they're strictly
              interested in a particular field.
            </p>
            <p className="mb-4">
              - Is the mentee looking for any bonuses to supplement their time?
              In other words, are they looking for credit? Maybe a paid
              position? It's all down to the preferences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Mentor Application</h2>
            <p className="mb-4">
              Aspiring mentors can list their details below to be matched with a
              mentee who is interested in their area of research.
            </p>
            <form id="mentorForm" className="space-y-4" onSubmit={submitForm}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  title="Name"
                  type="text"
                  id="mentorName"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-gray-700">Year</label>
                <input
                  title="Year"
                  type="text"
                  id="mentorYear"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-gray-700">Major</label>
                <input
                  title="Major"
                  type="text"
                  id="mentorMajor"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-gray-700">
                  Current Research Field
                </label>
                <input
                  title="Current Research Field"
                  type="text"
                  id="mentorResearchField"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></input>
              </div>
              <div>
                <label className="block text-gray-700">
                  Description of Current Research
                </label>
                <textarea
                  title="Current Research Description"
                  id="mentorResearchDescription"
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                  required
                ></textarea>
              </div>
              <button
                type="button"
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
