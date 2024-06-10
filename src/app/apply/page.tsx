// @app/apply/page.tsx
//
// 'research.osu.dev' application page definition.

// NextJS essential imports.

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';
import DefaultLoginForm from '@components/DefaultLoginForm';

export default function Apply () {
  return (
    <main>
<div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-center">Undergraduate Research Mentorship Program</h1>

    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-2">Aspiring Mentees</h2>
        <p className="mb-4">
          If you're ready to find research best suited for you,
you've come to the right place.
        </p>
        <p className="mb-4">
          Before scheduling a meeting with a mentor, make sure you
          have established a few things:
        </p>
        <p className="mb-4">
          - Field(s) that you're interested in pursuing research in 
        </p>
        <p className="mb-4">
          - What you desire to achieve through research
        </p>
        <p className="mb-4">
          - Any additional criteria you may desire from your research experience
          (ie credits, pay, etc)
        </p>
        <p className = "mb-4">
          - Your pre-professional path and how that may correlate with your
          interests
        </p>
        <p className="mb-4">
          These are important points of consideration when choosing a lab to join, but
don't worry, we have it organized in the application below for you:</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-2">Aspriring Mentors</h2>
        <p className="mb-4">
          Your role as a mentor is a simple but crucial one. 
        </p>
        <p className="mb-4">
          It consists of helping fellow peers who desire to acquire research in the
same or similar field as you, and guiding them through their journey. Here
are some key points and questions to consider when mentoring:  
        </p>
        <p className="mb-4">
          - Ensure that the mentee's goals are well established, in other
 words, why is the mentee interested in gaining research
 experience? It could be for mere exposure in a lab setting all
 the way to materializing an elaborate research project/
 proposition 
        </p>
        <p className="mb-4">
          - What are the mentee's fields of interest? Are they open to being
 involved in any field of research? Maybe they're strictly
 interested in a particular field.
        </p>
        <p className="mb-4">
          - Is the mentee looking for any bonuses to supplement their time? In
 other words, are they looking for credit? Maybe a paid
 position? It's all down to the preferences.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Mentee Application</h2>
        <p className="mb-4">
          Aspiring mentees can list their details below to be matched with a mentor who can help them achieve their research goals.
        </p>
        <form id="menteeForm" className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input title="Name" type="text" id="menteeName" className="w-full px-3 py-2 border rounded-md" required></input>
          </div>
          <div>
            <label className="block text-gray-700">Year</label>
            <input title="Year" type="text" id="menteeYear" className="w-full px-3 py-2 border rounded-md" required></input>
          </div>
          <div>
            <label className="block text-gray-700">Major</label>
            <input title="Major" type="text" id="menteeMajor" className="w-full px-3 py-2 border rounded-md" required></input>
          </div>
          <div>
            <label className="block text-gray-700">Desired Research Field</label>
            <input title="Desired Research Field" type="text" id="menteeResearchField" className="w-full px-3 py-2 border rounded-md" required></input>
          </div>
          <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                Submit
                </button>
        </form>
      </div>


      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Mentor Application</h2>
        <p className="mb-4">
          Aspiring mentors can list their details below to be matched with a mentee who is interested in their area of research.
        </p>
        <form id="mentorForm" className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input title="Name" type="text" id="mentorName" className="w-full px-3 py-2 border rounded-md" required></input>
          </div>
          <div>
            <label className="block text-gray-700">Year</label>
            <input title="Year" type="text" id="mentorYear" className="w-full px-3 py-2 border rounded-md" required></input>
          </div>
          <div>
            <label className="block text-gray-700">Major</label>
            <input title="Major" type="text" id="mentorMajor" className="w-full px-3 py-2 border rounded-md" required></input>
          </div>
          <div>
            <label className="block text-gray-700">Current Research Field</label>
            <input title="Current Research Field" type="text" id="mentorResearchField" className="w-full px-3 py-2 border rounded-md" required></input>
          </div>
          <div>
            <label className="block text-gray-700">Description of Current Research</label>
            <textarea title="Current Research Description" id="mentorResearchDescription" className="w-full px-3 py-2 border rounded-md" rows={3} required></textarea>
          </div>
          <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                Submit
                </button>
        </form>
      </div>
    </div>
  </div>
    </main>
  );
}