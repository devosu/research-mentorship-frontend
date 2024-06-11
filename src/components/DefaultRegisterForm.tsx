// @components/DefaultRegisterForm
//
// DefaultRegisterForm component definition.

// NextJS essential imports.
"use client";
import { useEffect, useState } from "react";
import { signUpWithEmail } from "@src/lib/firebaseAuth";
import { createMenteeUserObject, createMentorUserObject } from "@src/lib/firebaseDb";

// Local imports.

export default function DefaultRegisterForm () {
    const [isMentor, setIsMentor] = useState(false);
    const [hasPasswordError, setHasPasswordError] = useState(false);

    const onChangeCheckBox = (e: any) => {
        setIsMentor(e.target.checked);
    };
  
	useEffect(() => {
		const init = async () => {
		  const { Ripple, Input, initTWE } = await import("tw-elements");
		  initTWE({ Ripple, Input });
		};
		init();
	}, []);

    function createUser() {
        setHasPasswordError(false);
        var firstName = (document.getElementById('firstName') as HTMLInputElement).value;
        var lastName = (document.getElementById('lastName') as HTMLInputElement).value;
        var email = (document.getElementById('email') as HTMLInputElement).value;
        var password = (document.getElementById('password') as HTMLInputElement).value;
        var confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
        

        console.log('fName: ' + firstName);
        console.log('lName: ' + lastName);
        console.log('email: ' + email);
        console.log('password: ' + password);
        console.log('confirmPassword: ' + confirmPassword);

        
        if (password == confirmPassword && isMentor) {
            signUpWithEmail(email, password).then((res) => {
                console.log(res?.uid);
                createMentorUserObject(firstName, lastName, email);
            });
        }
        else if (password == confirmPassword && !isMentor) {
            signUpWithEmail(email, password).then((res) => {
                console.log(res?.uid);
                createMenteeUserObject(firstName, lastName, email);
            });
        }
        else {
            setHasPasswordError(true);
        }
    }

	return (
		<div
            className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
            <form>
                <div className="grid grid-cols-2 gap-4">
                <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                    required
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="firstName"
                    aria-describedby="emailHelp123"
                    placeholder="First name" />
                    <label
                    htmlFor="emailHelp123"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
                    >First name
                    </label>
                </div>

                <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                    required
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="lastName"
                    aria-describedby="emailHelp124"
                    placeholder="Last name" />
                    <label
                    htmlFor="exampleInput124"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
                    >Last name
                    </label>
                </div>
                </div>

                <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                    type="email"
                    required
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="email"
                    placeholder="Email address" />
                <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
                    >Email address
                </label>
                </div>


                <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                    type="password"
                    required
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="password"
                    placeholder="Password" />
                <label
                    htmlFor="password"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
                    >Password
                </label>
                {hasPasswordError && <div
                    className="absolute w-full text-sm text-neutral-500"
                    data-twe-input-helper-ref>
                    Passwords do not match
                </div>}
                </div>

                <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                    type="password"
                    required
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="confirmPassword"
                    placeholder="Confirm Password" />
                <label
                    htmlFor="confirmPassword"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
                    >Confirm Password
                </label>
                </div>

                <div className="mb-6 flex items-center justify-between">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                    <input
                        className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                        type="checkbox"
                        onChange={onChangeCheckBox}
                        value=""
                        id="isMentor" />
                    <label
                        className="inline-block ps-[0.15rem] hover:cursor-pointer"
                        htmlFor="isMentor">
                        Are you a mentor?
                    </label>
                    </div>
                </div>

                <button
                type="button"
                onClick={createUser}
                className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                Sign up
                </button>

                <p className="mt-6 text-center">
                Already have an account?
                <a
                    href="/signin"
                    className="text-primary focus:outline-none dark:text-primary-400"
                    > Sign In</a
                >
            </p>
            </form>
            </div>
	);
}