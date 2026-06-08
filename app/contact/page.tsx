'use client'

import { useState } from "react";

export default function ContactPage() {
    const [formError, setFormError] = useState<boolean>(false);
    const [formSuccess, setFormSuccess] = useState<boolean>(false);

    const onSubmit = async (event) => {
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
        <div className="flex flex-col flex-1 items-center justify-centerfont-sans">
            <h1 className="text-3xl pt-16 font-bold">Get in Touch</h1>
            <span className="pt-2 text-gray-500 w-110 text-center">Fill out the form below and one of our staff will get back to you as soon as possible!</span>

            <form onSubmit={onSubmit}>
                <input type="hidden" name="redirect" value="http://localhost:3000/contact"></input>
                <div className="mb-5 w-150 pt-10">
                    <label htmlFor="name" className="mb-3 block text-base font-medium text-black justify-self-center">Full Name</label>
                    <input type="text" placeholder="Your name" name="name"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-2" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="mb-3 block text-base font-medium text-black justify-self-center">Email Address</label>
                    <input type="email" placeholder="Your email" name="email"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-2" />
                </div>
                <div className="mb-5">
                    <label htmlFor="subject" className="mb-3 block text-base font-medium text-black justify-self-center">Subject</label>
                    <input type="text" placeholder="Message Subject" name="subject"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-2" />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="mb-3 block text-base font-medium text-black justify-self-center">Message</label>
                    <textarea rows={4} placeholder="Your message" name="message"
                        className="w-full resize-none roundedmd border border-gray-300 bg-white py-3 px-2"></textarea>
                </div>
                <div>
                    <button className="hover:shadow-form rounded-md bg-purple-500 py-3 w-full">Send Message</button>
                </div>
            </form>
            <div>
                {formSuccess && <span><strong className="text-emerald-700">Message has been sent successfully! We will get back to you as soon as possible</strong></span>}
                {formError && <span><strong className="text-red-700">Something went wrong... Please try again later or email us directly via mail@ainmhicon.ie</strong></span>}
            </div>
            
            <span className="pt-16">You can also contact us directly at <a href="mailto:mail@ainmhicon.ie" className="underline text-blue-800">mail@ainmhicon.ie</a></span>
        </div>
    );
}
