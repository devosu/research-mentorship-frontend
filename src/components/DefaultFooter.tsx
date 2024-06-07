// @components/DefaultFooter
//
// DefaultFooter component definition.

// NextJS essential imports.

// Local imports.

export default function DefaultFooter () {
	return (
		<footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
			<div className="bg-black/5 p-4 text-center text-surface dark:text-white">
				© 2024 Copyright:
				<a href="https://tw-elements.com/"> The Ohio State University</a>
			</div>
		</footer>
	);
}