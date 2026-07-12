export default function Pricing() {
    return (
        <div className="flex flex-col flex-1 items-center">
            <div className="w-full bg-base-100 px-5  text-center">
                <article className=" prose prose-xl m-auto py-10">
                    <h1 className="text-4xl md:text-5xl">Registration & Pricing</h1>
                    <div className="card bg-base-200 card-lg shadow-sm">
                        <div className="card-body">
                            <p>
                                Registration for Dealers Den opens on Tuesday 1st of July 10am and closes Tuesday 18th of July. We hope to have results of the den, as well as waiting list emails sent out by Wednesday the 30th of July.Registration for Standard, Sponsor and Founder tickets open Monday 25th of August at 6pm Irish Standard Time. All ticket prices are non residential. This means that it does not include a hotel stay. To book the Clayton Hotel, we have a special discount code that will be made available to you once you have completed registration payment. A €10 Early Bird discount will be available for tickets bought between August 25th to October 4th. Standard price applies from October 5th to January 4th. A €10 late fee will be applied from January 5th to February 28th.
                            </p>

                        </div>
                    </div>
                </article>
                <div className="divider w-[50%] mx-auto"></div>
                <article className='m-auto px-3 m-w-full group py-10'>
                    <div className='flex flex-row justify-center items-center gap-6 mb-8'>
                        <h3 className='flex-1 text-2xl  text-right'>Day Pass</h3>
                        <input type="checkbox" defaultChecked className="toggle toggle-neutral" />
                        <h3 className='flex-1 text-2xl text-left'>Full Weekend</h3>
                    </div>
                    <div className='grid grid-cols-1 auto-rows-auto md:grid-cols-3 md:grid-rows-1 md:auto-rows-auto justify-center gap-6 m-auto max-w-100 md:max-w-300 text-neutral-content'>
                        <div className="card bg-accent shadow-lg rounded-xl overflow-hidden scale-100 hover:scale-110 transition-transform duration-250">
                            <div className="card-body p-0 gap-0">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-light bg-(--color-base-400) text-neutral-content m-0! py-2">STANDARD TICKET</h2>
                                    <span className="text-xl bg-neutral text-neutral-content py-4 inline group-has-checked:hidden">€50 <span className='align-super text-xs'>/day</span></span>
                                    <span className="text-xl bg-neutral text-neutral-content py-4 hidden group-has-checked:inline">€80 <span className='align-super text-xs'>/weekend</span></span>
                                </div>
                                <div className="font-bold join join-vertical bg-accent">
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='inline group-has-checked:hidden'>Saturday/Sunday Entry</span>
                                        <span className='hidden group-has-checked:inline'>Full Weekend Entry</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Con Book and Bag</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Ainmhicon Merch</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Convention Lanyard</span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold bg-accent content py-4  mt-auto border-t border-neutral  inline group-has-checked:hidden">€50 <span className='align-super text-xs'>/day</span></span>
                                <span className="text-xl font-bold bg-accent content py-4  mt-auto border-t border-neutral  hidden group-has-checked:inline">€80 <span className='align-super text-xs'>/weekend</span></span>
                            </div>
                        </div>
                        <div className="card bg-accent shadow-lg rounded-xl overflow-hidden scale-100 hover:scale-110 transition-transform duration-250">
                            <div className="card-body p-0 gap-0">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-light bg-(--color-base-400) text-neutral-content m-0! py-2">SPONSOR</h2>
                                    <span className="text-xl bg-neutral text-neutral-content py-4 inline group-has-checked:hidden">€90 <span className='align-super text-xs'>/day</span></span>
                                    <span className="text-xl bg-neutral text-neutral-content py-4 hidden group-has-checked:inline">€160 <span className='align-super text-xs'>/weekend</span></span>
                                </div>
                                <div className="font-bold join join-vertical bg-accent">
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='inline group-has-checked:hidden'>Saturday/Sunday Entry</span>
                                        <span className='hidden group-has-checked:inline'>Full Weekend Entry</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Hardback Con Book, Honourable Mention and Bag</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Ainmhicon Merch</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Sponsor Lanyard</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Priority Queueing for some events</span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold bg-accent content py-4  mt-auto border-t border-neutral  inline group-has-checked:hidden">€90 <span className='align-super text-xs'>/day</span></span>
                                <span className="text-xl font-bold bg-accent content py-4  mt-auto border-t border-neutral  hidden group-has-checked:inline">€160 <span className='align-super text-xs'>/weekend</span></span>
                            </div>
                        </div>
                        <div className="card bg-accent shadow-lg rounded-xl overflow-hidden scale-100 hover:scale-110 transition-transform duration-250">
                            <div className="card-body p-0 gap-0">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-light bg-(--color-base-400) m-0! py-2">FOUNDER</h2>
                                    <span className="text-xl bg-neutral text-neutral-content py-4">€260 <span className='align-super text-xs'>/weekend</span></span>
                                </div>
                                <div className="font-bold join join-vertical bg-accent">
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Full Weekend Entry</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Con Book and Bag</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Founder Merch</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Founder Lanyard</span>
                                    </div>

                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Priority Queueing for some events</span>
                                    </div>

                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Founder Meal in the Hotel Restaurant</span>
                                    </div>

                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Early access to the Dealer's Den</span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold bg-accent content py-4">€260 <span className='align-super text-xs'>/weekend</span></span>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="divider w-[50%] mx-auto"></div>
                <article className='py-10'>
                    <div className='prose prose-lg mx-auto my-8'>
                        <h2>Hotel and Accommodation</h2></div>
                    <div className="card bg-base-200 card-lg shadow-sm w-fit  lg:card-side m-auto">

                        <div className="card-body prose prose-lg">
                            <p>Need a place to stay during the convention? Then our venue, <a href='https://www.claytonhotels.com/liffey-valley/'>Clayton Hotel Liffey Valley</a>, is the place to stay! For the 2<sup>nd</sup> - 4<sup>th</sup> of April 2027 they are providing reduced prices for con goers. The hotel sports a 20m Pool & Club Vitae Leisure Centre, 349 Rooms & Suites (including accessible rooms on request) and parking available at €6 per night.The hotel has a large car park. The overnight charge is €10 per vehicle, hours 0-2 are free and after 2 hours it is €3.00 per hour. The discount code for the hotel will be provided after registration payment is completed.</p>

                        </div>
                        <figure className="hidden lg:block h-87.5">
                            <img src='/hotel.webp' />
                        </figure>
                    </div>
                </article>
            </div >
        </div >
    );
}
