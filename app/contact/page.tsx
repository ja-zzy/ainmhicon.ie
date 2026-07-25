'use client'

import { SubmitEventHandler, useState } from "react";

export default function ContactPage() {
    const [formError, setFormError] = useState<boolean>(false);
    const [formSuccess, setFormSuccess] = useState<boolean>(false);

    const onSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "c1f067ee-8515-49f3-8ad8-b2b25dc1f4ff");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setFormSuccess(true);
            event.target.reset();
        } else {
            setFormError(true)
        }
    };

    return (

        <article className="flex flex-col flex-1 items-center prose prose-xl m-auto">
            <div className="w-full bg-base-100">
                <h1 className="m-auto py-10 pb-0 md:pb-10 text-center text-5xl sm:text-[2.8em]">Get In Touch</h1>
            </div>
            <div className="card bg-base-200 card-lg shadow-sm w-[90vw] md:w-[70vw] max-w-275 lg:card-side padding flex flex-col p-8">
                <span className="pt-6 text-center">Fill out the form below and one of our staff will get back to you as soon as possible! <br/>If you prefer, you can also contact us directly at <a href="mailto:mail@ainmhicon.ie" className="underline">mail@ainmhicon.ie</a></span>
                <form onSubmit={onSubmit}>
                    <div className="mb-5 pt-10">
                        <label htmlFor="name" className="mb-3 block">Full Name</label>
                        <input type="text" placeholder="Your name" name="name"
                            className="w-full rounded-md border py-3 px-2" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block ">Email Address</label>
                        <input type="email" placeholder="Your email" name="email"
                            className="w-full rounded-md border py-3 px-2" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="subject" className="mb-3 block ">Subject</label>
                        <input type="text" placeholder="Message Subject" name="subject"
                            className="w-full rounded-md border py-3 px-2" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="mb-3 block">Message</label>
                        <textarea rows={4} placeholder="Your message" name="message"
                            className="w-full resize-none rounded-md border py-3 px-2"></textarea>
                    </div>
                    <div>
                        <button className="hover:shadow-form rounded-md bg-base-100 py-3 w-full font-bold">Send Message</button>
                    </div>
                </form>
                <div>
                    {formSuccess && <span><strong className="text-success">Message has been sent successfully! We will get back to you as soon as possible</strong></span>}
                    {formError && <span><strong className="text-error">Something went wrong... Please try again later or email us directly via mail@ainmhicon.ie</strong></span>}
                </div>
            </div>
        </article>
    );
}
