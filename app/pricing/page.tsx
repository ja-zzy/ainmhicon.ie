export default function Pricing() {
    return (
        <div className="flex flex-col flex-1 items-center">
            <div className="w-full bg-base-100 text-center">
                <article className=" prose prose-xl m-auto py-10 w-[90vw] md:w-[70vw]  max-w-205">
                    <h1 className="text-5xl sm:text-[2.8em]">Registration & Pricing</h1>
                    <div className="card bg-base-200 card-lg shadow-sm m-auto">
                        <div className="card-body">
                            <p>
                                Ticket Sales for attendees will begin on <b>Sunday 30<sup>th</sup> of August at 6pm Irish Standard Time</b>. Ticket prices are non-residential and do not include hotel fees. We have procured a discount code for those wishing to stay at the Clayton Hotel, and the code that will be made available to you once you have completed registration payment.
                            </p>
                            <p>Register for an account <a href='https://reg.ainmhicon.ie/'>here</a> to be ready the moment tickets go on sale.</p>
                        </div>
                    </div>
                </article>
                <div className="divider w-[50%] mx-auto"></div>
                 <article className='m-auto px-10 m-w-full group py-10'>
                    <div className='flex flex-row justify-center items-center gap-6 mb-8'>
                        <h3 className='flex-1 text-2xl  text-right'>Day Pass</h3>
                        <input type="checkbox" defaultChecked className="toggle toggle-neutral" />
                        <h3 className='flex-1 text-2xl text-left'>Full-Event</h3>
                    </div>
                    <div className='grid grid-cols-1 auto-rows-auto lg:grid-cols-3 lg:grid-rows-1 lg:auto-rows-auto justify-center gap-6 m-auto max-w-100 lg:max-w-300 text-neutral-content'>
                        <div className="card bg-accent shadow-lg rounded-xl overflow-hidden scale-100 hover:scale-110 transition-transform duration-250">
                            <div className="card-body p-0 gap-0">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-light bg-(--color-base-400) text-neutral-content m-0! py-2">STANDARD TICKET</h2>
                                </div>
                                <div className="font-bold join join-vertical bg-accent">
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='inline group-has-checked:hidden'>1 Day Entry</span>
                                        <span className='hidden group-has-checked:inline'>3 Day Entry</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Con Book and Bag</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Ainmhícon Merch</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Convention Lanyard</span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold bg-accent content py-4  mt-auto border-t border-neutral  inline group-has-checked:hidden">€50 <span className='align-super text-xs'>/Day</span></span>
                                <span className="text-xl font-bold bg-accent content py-4  mt-auto border-t border-neutral  hidden group-has-checked:inline">€95 <span className='align-super text-xs'>/Full-Event</span></span>
                            </div>
                        </div>
                        <div className="card bg-accent shadow-lg rounded-xl overflow-hidden scale-100 hover:scale-110 transition-transform duration-250">
                            <div className="card-body p-0 gap-0">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-light bg-(--color-base-400) text-neutral-content m-0! py-2">SPONSOR</h2>
                                </div>
                                <div className="font-bold join join-vertical bg-accent">
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='inline group-has-checked:hidden'>1 Day Entry</span>
                                        <span className='hidden group-has-checked:inline'>3 Day Entry</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Hardback Con Book and Bag</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>T-Shirt</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Ainmhícon Merch</span>
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
                                <span className="text-xl font-bold bg-accent content py-4  mt-auto border-t border-neutral  inline group-has-checked:hidden">€105 <span className='align-super text-xs'>/Day</span></span>
                                <span className="text-xl font-bold bg-accent content py-4  mt-auto border-t border-neutral  hidden group-has-checked:inline">€175 <span className='align-super text-xs'>/Full-Event</span></span>
                            </div>
                        </div>
                        <div className="card opacity-50 grayscale-100 group-has-checked:grayscale-0 group-has-checked:opacity-100 bg-accent shadow-lg rounded-xl overflow-hidden scale-100 group-has-checked:hover:scale-110 transition-all duration-250">
                            <div className="card-body p-0 gap-0">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-light bg-(--color-base-400) m-0! py-2">SUPER SPONSOR</h2>
                                </div>
                                <div className="font-bold join join-vertical bg-accent">
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>3 Day Entry</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Hardback Con Book and Bag</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>T-Shirt</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Exclusive Super Sponsor Merch</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Super Sponsor Lanyard</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Priority Queueing for some events</span>
                                    </div>
                                    <div className='border-b border-neutral py-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Early access to the Dealer's Den</span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold bg-accent content py-4">€260 <span className='align-super text-xs'>/Full-Event</span></span>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="divider w-[50%] mx-auto"></div>
                <article className='py-10 w-[90vw] md:w-[70vw] max-w-205 m-auto'>
                    <div className='prose prose-lg mx-auto my-8 '>
                        <h2>Hotel and Accommodation</h2></div>
                    <div className="card bg-base-200 card-lg shadow-sm lg:card-side m-auto">

                        <div className="card-body shrink">
                            <p>If you need a place to stay during the convention then our venue, <a href='https://www.claytonhotels.com/liffey-valley/'>Clayton Hotel Liffey Valley</a>, is the place to be! For the 2<sup>nd</sup> - 4<sup>th</sup> of April 2027 they are providing reduced prices for con goers. The hotel sports a 20m Pool & Club Vitae Leisure Centre, 349 Rooms & Suites (including accessible rooms on request) and parking available at €6 per night.The hotel has a large car park. The overnight charge is €10 per vehicle, hours 0-2 are free and after 2 hours it is €3 per hour. The discount code for the hotel will be provided after registration payment is completed.</p>

                        </div>
                        <figure className="hidden lg:block h-87.5 shrink-0 max-w-62 h-full">
                            <img src='/hotel.webp' />
                        </figure>
                    </div>
                </article>
            </div >
        </div >
    );
}
