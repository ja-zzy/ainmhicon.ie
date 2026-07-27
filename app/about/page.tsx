import LinkButton from "../components/link-button";

export default function CodeOfConduct() {
    return (
        <article className="flex flex-col flex-1 items-center prose m-auto [&_p]:mt-1 [&_p]:mb-1">
            <div className="w-full bg-base-100">
                <h1 className="m-auto py-10 pb-0 md:pb-10 text-center text-5xl sm:text-[2.8em]">Ainmhícon</h1>
            </div>
            <div className="card bg-base-200 card-lg shadow-sm w-[90vw] md:w-[70vw] max-w-275 lg:card-side">
                <div className="card-body py-12">
                    <div className="flex flex-col flex-1">
                        <h2 className="mt-0 ">About this Site</h2>
                        <h3>What is Ainmhícon?</h3>
                        <p>Ainmhícon is an annual furry convention held in Dublin, Ireland. This website provides information for attendees who wish to learn about the convention, purchase tickets, and prepare for their visit.
                            The site contains information about the convention schedule, events, the Dealer's Den, venue details, and other information attendees need before and during the event.
                        </p>
                        <h3>Accounts and Sign-In</h3>
                        <p>Ainmhícon allows attendees to create an account and sign in using their email address or supported third-party authentication providers, such as Google Sign-In.
                            Accounts are used to securely manage attendee registration and provide access to convention services. Signing in allows attendees to purchase tickets, view their registration information, and manage the information that will be used for their convention attendance.</p>
                        <h3>Information We Collect</h3>
                        <p>When creating an account, attendees may provide information including:</p>
                        <ul>
                            <li>Name</li>
                            <li>Preferred nickname</li>
                            <li>Profile picture</li>
                            <li>Additional information they choose to provide for display on their convention badge</li>
                        </ul>
                        <p>When signing in using Google or another third-party provider, we may receive basic account information required to create and authenticate an account, such as:</p>
                        <ul>
                            <li>Name</li>
                            <li>Email Address</li>
                            <li>Profile picture (where available)</li>
                        </ul>
                        <p>This information is used only to provide account functionality, manage convention registrations, and create attendee records.</p>
                        <h3>How We Use Your Information</h3>
                        <p>Information provided through an Ainmhícon account is used to:</p>
                        <ul>
                            <li>Create and manage attendee accounts</li>
                            <li>Process ticket purchases for convention attendance</li>
                            <li>Provide attendees with their registration information</li>
                            <li>Prepare convention badges</li>
                            <li>Communicate important information relating to convention attendance</li>
                        </ul>
                        <p>We do not sell personal information or use account information for advertising purposes.</p>
                        <h3>Tickets and Convention Registration</h3>
                        <p>Through their account, attendees can purchase tickets for different dates and ticket tiers. Registered attendees can access the information they need for check-in and attendance at the convention.</p>
                        <h3>Other Site Features</h3>
                        <p>The Ainmhícon website also provides information about:</p>

                        <ul>
                            <li>Dealer's Den applications and information for artists and vendors</li>
                            <li>Convention events and schedules</li>
                            <li>Venue information</li>
                            <li>Other updates related to the convention</li>
                        </ul>
                        <h2>Ainmhícon Application Profile & Data Usage</h2>

                        <p>
                            <strong>Application Purpose:</strong> Ainmhícon is a web application designed to manage ticket sales, attendee registration, and user accounts for the annual Ainmhícon convention in Dublin, Ireland.
                        </p>

                        <p>
                            <strong>Google User Data Purpose:</strong> When you use Google Sign-In, the Ainmhícon web application requests access to your basic profile information (specifically your <strong>openid</strong> identifier, <strong>profile</strong> information, and <strong>email</strong> address). We use this information strictly to create your secure attendee profile, verify your identity upon login, communicate essential ticket information, and pre-fill your convention badge details.
                        </p>

                        <p>
                            We do not use your Google data for any purpose outside of convention registration, nor do we sell or share this information with external third parties.
                        </p>
                        <div className="m-auto"><LinkButton href='https://reg.ainmhicon.ie'>Login</LinkButton></div>
                    </div>
                </div>
            </div>
        </article>
    );
}
