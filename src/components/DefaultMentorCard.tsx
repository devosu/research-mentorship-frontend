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

export default function DefaultMentorCard (props: Props) {
return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">Name: {props.name}</h2>
            <p className="mt-2">Major: {props.major}</p>
            <p className="mt-2">Research Field: {props.researchField}</p>
            <p className="mt-2">Description of Research Field: {props.researchDesc}</p>
            <p className="mt-2">Outlook Scheduling Calendar Link: {props.link}</p>
        </div>
);
}