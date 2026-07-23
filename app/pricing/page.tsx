export default function Pricing() {
    return (
        <div className="flex flex-col flex-1 items-center">
            <div className="w-full bg-base-100 text-center">
                <article className=" prose prose-xl m-auto py-10 w-[90vw] md:w-[70vw]  max-w-205">
                    <h1 className="text-5xl sm:text-[2.8em]">Registration & Pricing</h1>
                    <div className="card bg-base-200 card-lg shadow-sm m-auto">
                        <div className="card-body">
                            <p>
                                Registration for attendees will open <b>Tuesday 25<sup>th</sup> of August at 6pm Irish Standard Time</b>. Ticket prices are non-residential and do not include hotel fees. We have procured a discount code for those wishing to stay at the Clayton Hotel, and the code that will be made available to you once you have completed registration payment.<br/><br/><b>Ticket prices for 2027 will be announced on this page shortly.</b>
                            </p>

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
