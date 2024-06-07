// @components/DefaultHeader
//
// DefaultHeader component definition.

// NextJS essential imports.
"use client";
import { useEffect } from "react";
import Image from 'next/image';

// Local imports.
import logo from '../../public/images/logo.png';

export default function DefaultHeader () {
	useEffect(() => {
		const init = async () => {
		  const { Collapse, initTWE } = await import("tw-elements");
		  initTWE({ Collapse });
		};
		init();
	  }, []);
	return (
		<header>
			<nav
			className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
			data-twe-navbar-ref>
			<div className="flex w-full flex-wrap items-center justify-between px-3">
				<div>
				<a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
					<Image src={logo} width={35} height={35} alt='Logo'/>
				</a>
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
					<a
						className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
						aria-current="page"
						href="#"
						data-twe-nav-link-ref
						>OSU UREA</a
					>
					</li>
				</ul>
			
				<div className="flex items-center">
					<a
					type="button"
					href="/"
					data-twe-ripple-init
					data-twe-ripple-color="light"
					className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
					Home
					</a>
					<a
					type="button"
					href="/mentors"
					data-twe-ripple-init
					data-twe-ripple-color="light"
					className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
					Mentors
					</a>
					<a
					type="button"
					href="/resources"
					data-twe-ripple-init
					data-twe-ripple-color="light"
					className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
					Resources
					</a>
					<a
					type="button"
					href="/apply"
					data-twe-ripple-init
					data-twe-ripple-color="light"
					className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
					Apply
					</a>
				</div>
				</div>
			</div>
			</nav>
		</header>
	);
}