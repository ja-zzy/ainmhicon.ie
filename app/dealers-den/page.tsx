export default function DealersDen() {
    return (
        <article className="flex flex-col flex-1 items-center prose prose-xl m-auto">
            <div className="w-full bg-base-100">
                <h1 className="m-auto py-10 text-center">Dealer's Den 2027 Information</h1>
            </div>
            <div className="card bg-base-200 card-lg shadow-sm w-[70vw] max-w-275 lg:card-side">
                <div className="card-body py-12">
                    <h2 className="text-4xl mt-0">General Information</h2>
                    <p >The Dealer's Den is the convention's marketplace, hosting a variety of
                        dealers for you to hopefully find something awesome!</p>

                    <h3 className="mt-4">Visiting the Dealer's Den</h3>
                    <p >The Dealer's Den will be open to attendees on Saturday. Check the con
                        schedule for exact timings.</p>

                    <h3 className="mt-4">Rules</h3>
                    <ul className="list-disc list-inside  my-0">
                        <li>
                            Food and drink will not be allowed in the Den, except if it belongs to dealers or
                            their assistants.
                        </li>
                        <li>
                            The doors will be manned at all times, during opening hours, by a member of the
                            Dealer's Den and Security team.
                        </li>
                        <li>
                            Dealers are responsible for keeping their stock and valuables secure.
                            The convention accepts no liability for any loss/theft/damage unless caused by our
                            own negligence
                        </li>
                        <li>
                            Photography is not permitted in the Dealer's Dan.
                        </li>
                        <li>
                            Wearing Fursuits or any parts is not permitted in the Dealer's Den this includes any
                            item of clothing that could cause damage, due to safety concerns.
                        </li>
                        <li>
                            For more guidance on the rules, please check out the Dealer's Den <a className="underline"
                                href="https://docs.google.com/document/d/1aiUlJ3BbRYi-h1JRjKacowwRq5Bj3kyKZ0A0XAkuHRM/edit?usp=sharing">
                                Terms and Conditions</a>.
                        </li>
                    </ul>

                    <h3 className="mt-4">Dealing in the Dealer's Den</h3>
                    <p>How do I apply to be a dealer?</p>
                    <ol className="list-decimal list-inside  my-0">
                        <li>
                            Read the Terms and Conditions of the Dealer's Den and the Convention's weapons policy.
                            You will be asked to sign a form agreeing to abide by these terms at the con when you
                            sign in for your table.
                        </li>
                        <li>
                            You must be a fully paid attendee to be approved for a table in the Dealer's Den:
                            <ul className="list-disc list-inside  my-0">
                                <li>
                                    Registering for a table does not guarantee you a table.
                                </li>
                                <li>
                                    Payment for your table is once the Dealer's Den opens for setup.
                                </li>
                                <li>
                                    If you cancel your table, it will be offered to the next person on the list.
                                    You will not be able to sell it on.
                                </li>
                            </ul>
                        </li>
                        <li>
                            We will review the table request, and contact you if additional information is required,
                            or if your preferred table is unavailable.
                        </li>
                        <li>
                            If your preferred table is unavailable, we will offer you an alternative or the option to
                            go on the waiting list.
                        </li>
                        <li>
                            Once your attendance has been confirmed and paid, you will receive an email about any
                            addition payments for your table.
                        </li>
                    </ol>

                    <h3 className="mt-4">Pricing</h3>
                    <p>The tables will be €10 minimum charity donation.</p>
                    <p>Please email <a href='mailto:dealers@ainmhicon.ie'>dealers@ainmhicon.ie</a> for details.</p>

                    <h3 className="mt-4">Equipment</h3>
                    <p>We are required to ensure that all electricl equipment used by dealers is safe to be used.</p>
                    <p>Dealers are required to declare and have any electrical items visually checked before setting up
                        their tables. You will not be allowed to take electrical items to your table unless they have
                        been checked.</p>

                    <h3 className="mt-4">What do I Need to do Once I'm Confirmed?</h3>
                    <p>Once you have been confirmed as a dealer, the next step is to register your attending ticket as
                        soon as reg is open, please register asap to ensure you have everything in place to deal. Then
                        prepare to sell. We will send out an email (using the email you registered with), which will
                        include important information and the Dealers agreement. When you arrive at the convention we
                        will ask you to pay for your table once the dealers den opens for set up.</p>

                    <h3 className="mt-4">I want to have an assistant, how do I organise that?</h3>
                    <p>Dealers will be allocated one assistant badge per table requested (unless exceptional
                        circumstances apply). You are then allowed to give the badge to a fully paid convention attendee
                        to be an assistant(s).</p>

                    <h2 className="text-4xl">Deadlines</h2>
                    <h4 className="italic">Dealer's Den Registration</h4>
                    <p>This year’s deadline will be at <strong>23.59 GMT on 18th of July 2026</strong>, But depending on
                        demand, we may close Dealer registration earlier.</p>
                    <p>We will be letting dealers know before 23.59 GMT on <strong>30th July 2026</strong>.</p>

                    <h4 className="italic">Special Requests for Tables</h4>
                    <p>We are happy to accommodate special requests for table layouts and displays, but you need to make
                        sure you get these requests in by the <strong>30th November 2026</strong> (the sooner, the
                        better). This is because we must do an in-depth risk assessment for the Den and submit it to the
                        venue. Once this has been submitted, there can be no substitutions or changes made. You can
                        contact us if you have any questions regarding this.</p>

                    <p><strong><em>Please note that Management reserves the right to decline any request. There are
                        limitations these include, but are not limited to:</em></strong></p>

                    <ul className="list-disc list-inside my-0">
                        <li>
                            The dimensions of the table space offered.
                        </li>
                        <li>
                            Displays, Stands, Booths, and other structures higher than 2.2 meters in total height from
                            the floor.
                        </li>
                        <li>
                            Not encroaching onto other Dealer's space.
                        </li>
                        <li>
                            Maintaining safe access to walkways and fire exits.
                        </li>
                        <li>
                            Keeping emergency exits clear and unobstructed.
                        </li>
                    </ul>

                    <h3 >Contact Dealer's Den</h3>
                    <p>Please email <a href='mailto:dealers@ainmhicon.ie'>dealers@ainmhicon.ie</a> if you have any questions about being in the Dealer's Den!</p>
                </div>
            </div>
        </article>
    );
}
