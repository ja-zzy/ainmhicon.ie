export default function Faq() {
    return (
        <div className="flex flex-col flex-1 items-center">
            <div className="w-full bg-base-100 px-5">
                <article className="prose prose-xl m-auto py-10 text-center text-neutral-content">
                    <h1 className="text-5xl sm:text-[2.8em]">FAQ</h1>
                    <h2>Registration</h2>

                    <div className="join join-vertical bg-accent overflow-hidden radius rounded-4xl w-full shadow-2xl">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-reg-where" type="radio" name="my-accordion-4" />
                            <div id="faq-reg-where" className="collapse-title font-semibold text-left">Where do I register?</div>
                            <div className="collapse-content text-sm">You can register online at <a href='https://reg.ainmhicon.ie' className='text-neutral-content'>reg.ainmhicon.ie</a>. On-site registration may not be available due to demand, so we recommend registering early to secure your spot. </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-reg-where-number" type="radio" name="my-accordion-4" />
                            <div id="faq-reg-where-number" className="collapse-title font-semibold text-left">Where do I get a registration number?</div>
                            <div className="collapse-content text-sm">You’ll receive your registration number on our registration website after your payment has been processed. You may be asked for this number during check-in or pre-event communications. </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-reg-fee" type="radio" name="my-accordion-4" />
                            <div id="faq-reg-fee" className="collapse-title font-semibold text-left">What do I get for my registration fee?</div>
                            <div className="collapse-content text-sm">You’ll get access to all events for the day(s) you have booked, a conbadge, lanyard, conbook, and more! We’ll post a full breakdown of perks soon. </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-reg-data" type="radio" name="my-accordion-4" />
                            <div id="faq-reg-data" className="collapse-title font-semibold text-left">How is my data handled?</div>
                            <div className="collapse-content text-sm">We handle your data in line with GDPR. For more info please see our <a href='/privacy-policy' className='text-neutral-content'>Privacy Policy</a></div>
                        </div>
                    </div>

                    <h2>Attendance</h2>

                    <div className="join join-vertical bg-accent overflow-hidden radius rounded-4xl w-full shadow-2xl">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-attending-age" type="radio" name="my-accordion-4" />
                            <div id="faq-attending-age" className="collapse-title font-semibold text-left">What is the age for attendance?</div>
                            <div className="collapse-content text-sm">All attendees must be 18+ on the day of attendance with a valid form of ID.  </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-attending-proof" type="radio" name="my-accordion-4" />
                            <div id="faq-attending-proof" className="collapse-title font-semibold text-left">What proof will be needed?</div>
                            <div className="collapse-content text-sm">Please refer to our <a href='code-of-conduct' className='text-neutral-content'>Code of Conduct</a> for acceptable forms of ID. If you are unsure about your form of identification, please email <a href='mailto:conops@ainmhicon.ie' className='text-neutral-content'>conops@ainmhicon.ie</a> </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-attending-no-id" type="radio" name="my-accordion-4" />
                            <div id="faq-attending-no-id" className="collapse-title font-semibold text-left">What happens if I do not have a valid form of ID?</div>
                            <div className="collapse-content text-sm">If you do not have a valid form of identification on the day, you will not be allowed to access the event, and your registration fee will not be refunded. YOU HAVE BEEN WARNED! </div>
                        </div>
                    </div>


                    <h2>Payments and Cancellations</h2>

                    <div className="join join-vertical bg-accent overflow-hidden radius rounded-4xl w-full shadow-2xl">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-pay-accept" type="radio" name="my-accordion-4" />
                            <div id="faq-pay-accept" className="collapse-title font-semibold text-left">How do you accept payments?</div>
                            <div className="collapse-content text-sm">Our registration system uses Stripe, which allows for easy and secure card payments online. Once your payment has been confirmed, you will receive payment confirmation and your registration number. </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-pay-upgrade" type="radio" name="my-accordion-4" />
                            <div id="faq-pay-upgrade" className="collapse-title font-semibold text-left">Can I upgrade my ticket?</div>
                            <div className="collapse-content text-sm">Yes, if you have paid for a ticket and wish to upgrade it, you can get in contact with <a href='mailto:reg@ainmhicon.ie' className='text-neutral-content'>reg@ainmhicon.ie</a> </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-pay-cancel" type="radio" name="my-accordion-4" />
                            <div id="faq-pay-cancel" className="collapse-title font-semibold text-left">Can I cancel my registration payment?</div>
                            <div className="collapse-content text-sm">You can request a cancellation up to 14 days after purchase by contacting <a href='mailto:reg@ainmhicon.ie' className='text-neutral-content'>reg@ainmhicon.ie</a>. If you request a refund outside of this time period, we may be unable to refund you.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input aria-labelledby="faq-pay-edit" type="radio" name="my-accordion-4" />
                            <div id="faq-pay-edit" className="collapse-title font-semibold text-left">Registration is closed, can I still edit my registration info?</div>
                            <div className="collapse-content text-sm">After the registration closing date has passed, no changes can be made to your information, except potentially in exceptional circumstances. Please contact  <a href='mailto:reg@ainmhicon.ie' className='text-neutral-content'>reg@ainmhicon.ie</a> in the event you require assistance.  </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
