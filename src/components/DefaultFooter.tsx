// @components/DefaultFooter
//
// DefaultFooter component definition.

// NextJS essential imports.

// Local imports.

export default function DefaultFooter () {
	return (
		<footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left" style={{bottom: 0, left: 0, right: 0, position: 'fixed'}}>
			<div className="bg-black/5 p-4 text-center text-surface dark:text-white">
				© 2024 Copyright:
				<a href="https://usg.osu.edu/"> Undergraduate Student Government at The Ohio State University</a>
			</div>
		</footer>
	);
}