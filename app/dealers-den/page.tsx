import LinkButton from "../components/link-button";

export default function DealersDen() {
    const timeNow = Date.now()
    const dealersDenRegOpen = 1785776400000 // 6pm August 3rd 2026
    return (
        <article className="flex flex-col flex-1 items-center prose m-auto [&_p]:mt-1 [&_p]:mb-1">
            <div className="w-full bg-base-100">
                <h1 className="m-auto py-10 text-center text-5xl sm:text-[2.8em]">Dealer's Den 2027 Information</h1>
            </div>
            <div className="card bg-base-200 card-lg shadow-sm w-[90vw] md:w-[70vw] max-w-275 lg:card-side">
                <div className="card-body">
                    <h2 className='mt-0'>General Information</h2>
                    <p>The Dealers’ Den is the convention's marketplace, hosting a variety of dealers for you to hopefully find something awesome!</p>

                    <p>You will find a range of furry fandom dealers selling a variety of different furry merchandise as well as a table for our chosen charity with their own items for sale.</p>

                    <h2>Visiting the Dealers’ Den</h2>
                    <p>The Dealers' Den will be open to attendees on Saturday and Sunday. There will be different dealers each day to allow for a greater range of dealers to vend. Check the con schedule for exact timings. Saturday will be open from late morning to late afternoon whereas Sunday will be open from mid morning to mid afternoon (exact times to be confirmed later)</p>

                    <h2>Dealers’ Den House Rule</h2>
                    <p>Food and drink will not be allowed in the Den, except if it belongs to dealers or their assistants.</p>
                    <p>The doors will be staffed at all times, during opening hours, by a member of the Dealers’ Den and Security team.</p>
                    <p>Photography & videography are not permitted in the Dealer’s Dan. We will also politely ask you to remove any videoing equipment such as Meta Glasses for your duration of your visit into the Dealers’ Den. </p>
                    <p>Wearing Fursuits or any fursuit parts (including tails) is not permitted in the Dealers’ Den, this includes any item of clothing or bags (eg. rucksacks) that could cause damage due to safety concerns.</p>



                    <h2 id='applications'>How do I apply to be a dealer?</h2>

                    {timeNow >= dealersDenRegOpen
                        ? (
                            <LinkButton href='https://forms.gle/HZwnx7EmVV95HDmYA' className='w-[50%] m-auto mb-3 sm:mt-5 sm:mb-8'>Apply Here</LinkButton>
                        )
                        : (
                            <p>You’ll be able to apply to our Dealers’ Den on August 3rd at 6PM. We will announce the Dealers’ Den applications opening via our social media and channels. </p>
                        )}
                    <p>This year we are opening Dealers' Den applications before general convention tickets can be purchased, and you will be notified before payment is required if you are successful in your Den application. </p>

                   
                    {timeNow < dealersDenRegOpen && <p>Dealers' Den applications open at <b>18:00 GMT+1</b> (London, Dublin) on <b>3rd of August 2027</b>.</p>}
                    <p>This year’s deadline will be at <b>18:00 GMT+1</b> on <b>23rd of August 2027.</b></p>
                    <p>We will be letting dealers know before <b>23:59 GMT+1</b> on <b>28th August 2027.</b></p>


                    <p>Applying for a table does not guarantee you a table.</p>
                    <p>If you cancel your table, it will be offered to the next person on our waiting list. Tables cannot be bought or sold after being issued by the convention.</p>
                    <p>If your preferred trading date is unavailable, we will offer you an alternative date or the option to go on the waiting list.</p>
                    <p>Please email <a href='mailto:dealers@ainmhicon.ie'>dealers@ainmhicon.ie</a> for details.</p>

                    <h2>Pricing</h2>
                    <p>The tables will be €30 for the day.</p>
                    <p>You must be a fully paid attendee to be approved for a table in the Dealers’ Den</p>

                    <h2>What do I need to do once I'm confirmed?</h2>
                    <p>Once you’ve been confirmed as a dealer, the next step is to make sure you have registered with Ainmhicon and have purchased a ticket for our 2027 event.  We will send out an email (using the email you registered with), which will include a payment link along with any additional information.</p>

                    <h2>I want to have an assistant, how do I organise that?</h2>
                    <p>Dealers will be allocated one assistant badge per table requested (unless exceptional circumstances apply). This badge will be for the attendee you have specified in your Dealers’ Den application and only this attendee. If your assistant changes due to circumstance you will need to inform us via email.</p>

                    <h2>Equipment</h2>
                    <p>We are required to ensure that all electrical equipment used by dealers is PAT tested. This ensures the equipment is certified and safe to be used.</p>
                    <p>Dealers are required to declare and have any electrical items visually checked before setting up their tables. You will not be allowed to take electrical items to your table unless they have been checked.</p>
                    <p>This does not apply to devices powered solely by their internal batteries which are not plugged into mains electricity.</p>

                    <h2>Contact Dealers’ Den</h2>
                    <p>Please email <a href='maito:dealers@ainmhicon.ie'>dealers@ainmhicon.ie</a> if you have any questions about being in the Dealers’ Den!</p>
                    <br />
                    <p><i>For full Terms and Conditions for Dealers please see <a href='/dealers-den/terms'>this page</a></i></p>
                </div>
            </div>
        </article >
    );
}
