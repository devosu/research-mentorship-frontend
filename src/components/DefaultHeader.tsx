// @components/DefaultHeader
//
// DefaultHeader component definition.

"use client";
// NextJS essential imports.
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

// Local imports.
import { auth } from "@src/lib/firebaseInit";
import { signOut } from "@src/lib/firebaseAuth";
import { navigate } from "@src/app/actions";

export default function DefaultHeader () {
	const [isMentor, setIsMentor] = useState(false);
	const [isMentee, setIsMentee] = useState(false);
	const [isApprovedMentee, setIsApprovedMentee] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const init = async () => {
		  const { Dropdown, Collapse, initTWE } = await import("tw-elements");
		  initTWE({ Dropdown, Collapse });
		};
		init();
		auth.onAuthStateChanged(function(user) {
			if (user) {
			  setIsAuthenticated(true);
			} else {
			  setIsAuthenticated(false);
			}
		  });
	}, []);

	function signOutUser() {
		signOut();
		navigate('/');
	}

	return (
		<header>
			<nav
			className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
			data-twe-navbar-ref>
			<div className="flex w-full flex-wrap items-center justify-between px-3">
				<div>
				<Link href="/" className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0">
					<Image src={'/images/logo.png'} width={35} height={35} alt='Logo'/>
				</Link>
				</div>

				<button
				className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
				type="button"
				data-twe-collapse-init
				data-twe-target="#navbarSupportedContent4"
				aria-controls="navbarSupportedContent4"
				aria-expanded="false"
				aria-label="Toggle navigation">

				<span
					className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
					<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor">
					<path
						fillRule="evenodd"
						d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
						clipRule="evenodd" />
					</svg>
				</span>
				</button>

				<div
				className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
				id="navbarSupportedContent4"
				data-twe-collapse-item>

				<ul
					className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
					data-twe-navbar-nav-ref>

					<li
					className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
					data-twe-nav-item-ref>
					<Link
						className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
						aria-current="page"
						href="/"
						data-twe-nav-link-ref
						>OSU Undergraduate Research Mentorship Program</Link>
					</li>
				</ul>

			
				<div className="flex items-center">
					<Link
					type="button"
					href="/"
					data-twe-ripple-init
					data-twe-ripple-color="light"
					className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
					Home
					</Link>
					{(isMentor || (isMentee && isApprovedMentee)) && <Link
					type="button"
					href="/mentors"
					data-twe-ripple-init
					data-twe-ripple-color="light"
					className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
					Mentors
					</Link>}
					<Link
					type="button"
					href="/resources"
					data-twe-ripple-init
					data-twe-ripple-color="light"
					className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
					Resources
					</Link>
					{/* Authenticate Dropdown */}
					{ !isAuthenticated && <div className="relative" data-twe-dropdown-ref>
						<a
						className="flex items-center px-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
						href="#"
						type="button"
						id="dropdownMenuButton2"
						data-twe-dropdown-toggle-ref
						aria-expanded="false">
						<span className="[&>svg]:h-5 [&>svg]:w-5">
							<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							strokeWidth="1.5">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							</svg>
						</span>
						<span className="[&>svg]:w-5">
							<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clipRule="evenodd" />
							</svg>
						</span>
						</a>
						<ul
						className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
						aria-labelledby="dropdownMenuButton1"
						data-twe-dropdown-menu-ref>
						<li>
							<a
							className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
							href="/signin"
							data-twe-dropdown-item-ref
							>Sign In</a
							>
						</li>
						<li>
							<a
							className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
							href="/signup"
							data-twe-dropdown-item-ref
							>Sign Up</a
							>
						</li>
						</ul>
					</div>}
					{isAuthenticated && <div className="relative" data-twe-dropdown-ref>
						<a
						className="flex items-center px-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
						href="#"
						type="button"
						id="dropdownMenuButton2"
						data-twe-dropdown-toggle-ref
						aria-expanded="false">
						<span
							className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
							data-twe-dropdown-item-ref
							>Apply</span
							>
						<span className="[&>svg]:w-5">
							<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clipRule="evenodd" />
							</svg>
						</span>
						</a>
						<ul
						className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
						aria-labelledby="dropdownMenuButton1"
						data-twe-dropdown-menu-ref>
						<li>
							<a
							className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
							href="/apply-mentor"
							data-twe-dropdown-item-ref
							>Mentor App</a
							>
						</li>
						<li>
							<a
							className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
							href="/apply-mentee"
							data-twe-dropdown-item-ref
							>Mentee App</a
							>
						</li>
						</ul>
					</div>}
					{ isAuthenticated &&
						<button
						className="inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
						onClick={signOutUser}
						data-twe-dropdown-item-ref
						>Sign Out</button>}
				</div>
				</div>
			</div>
			</nav>
		</header>
	);
}