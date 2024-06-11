// @components/DefaultMentorCard
//
// DefaultMentorCard component definition.

// NextJS essential imports.

// Local imports.

interface Props {
    name: string
    major: string
    researchField: string
    researchDesc: string
    link: string
  }

export default function DefaultApplicationCard (props: Props) {
    return (
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold">Name: {name}</h2>
                <p className="mt-2">Year: {year}</p>
                <p className="mt-2">Major: {major}</p>
                <p className="mt-2">Research Field: {researchField}</p>
                <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Accept
                </button>
                <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Reject
                </button>
            </div>
    );
    }