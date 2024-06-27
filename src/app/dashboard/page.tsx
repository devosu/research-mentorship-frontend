// @app/dashboard/page.tsx
//
// 'research.osu.dev' dashboard page definition.

'use client';
// NextJS essential imports.
import { useState, useEffect } from 'react';

// Local imports.
import DefaultFooter from '@components/DefaultFooter';
import DefaultHeader from '@components/DefaultHeader';
import { navigate } from '../actions';

export default function Dashboard () {
    const [status, setStatus] = useState('Approved');

    useEffect(() => {
        // get status of application
	}, []);

    function navigateToPage(path: string) {
        navigate(path);
    }

    return (
        <main>
            <DefaultHeader/>
            <div style={{display: 'flex', flexDirection: 'column', margin: 'auto', alignItems: 'center'}}>
                <span style={{margin: '20px', fontSize: '25px'}} className='font-bold'>Application Status</span>
                <span style={{margin: '0px 0px 20px 20px', fontSize: '20px'}} className='font-medium'>{status}</span>
            </div>

            { (status == 'Incomplete') && <div style={{margin: '20px auto', width: '50%', alignContent: 'center'}}>
                <p style={{marginBottom: '10px', textAlign: 'center'}}>You have not submitted your application yet. Please click the button below to complete your application.</p>
                <button
                    type="button"
                    onClick={() => navigateToPage('/apply-mentee')}
                    className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Apply
                </button>
            </div> }

            { (status == 'Approved') && <div style={{margin: '20px auto', width: '50%', alignContent: 'center'}}>
                <p style={{marginBottom: '10px', textAlign: 'center'}}>Congratulations, your application has been approved! Please click the button below to view a list of available mentors.</p>
                <button
                    type="button"
                    onClick={() => navigateToPage('/mentors')}
                    className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    View Mentors
                </button>
            </div> }

            { (status == 'Submitted') && <div style={{margin: '20px auto', width: '50%', alignContent: 'center'}}>
                <p style={{marginBottom: '10px', textAlign: 'center'}}>Your application has been submitted. You will be notified when your application has been reviewed.</p>
            </div> }
            <DefaultFooter/>
        </main>
    );
}