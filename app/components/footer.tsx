import Bluesky from "./social-logos/bluesky";
import Instagram from "./social-logos/instagram";
import Telegram from "./social-logos/telegram";

export default function Footer() {
    return (
        <footer className='w-full grid grid-cols-2 auto-rows-auto gap-4 lg:grid-flow-col lg:auto-cols-auto lg:grid-rows-1 p-10 bg-base-300 basis'>
            <nav className='flex flex-col items-center prose prose-sm justify-center'>
                <h3>Navigation</h3>
                <a href='/'>Home</a>
                <a href='/faq'>FAQ</a>
                <a href='/pricing'>Pricing</a>
                <a href='/dealers-den'>Dealer's Den</a>

                <div className="divider w-[50%] mx-auto"></div>
                
                <a href='/code-of-conduct'>Code of Conduct</a>
                <a href='/privacy-policy'>Privacy Policy</a>
                <a href='/terms-of-service'>Terms of Service</a>

                <div className="divider w-[50%] mx-auto"></div>
                
                <a href='/contact'>Contact</a>
            </nav>
            <section className='prose prose-sm flex flex-col items-center justify-center '>
                <h3>Socials</h3>
                <div className='flex flex-row gap-3'>
                    <a href='https://bsky.app/profile/ainmhicon.ie'>
                        <Bluesky />
                    </a>
                    <a href='https://www.instagram.com/ainmhicon'>
                        <Instagram />
                    </a>
                    <a href='https://t.me/ainmhicon'>
                        <Telegram />
                    </a>
                </div>
            </section>
            <section className='prose prose-md flex flex-col items-center text-center justify-center col-span-2 lg:col-span-1 m-auto mt-4 sm:mt-auto'>
                <div className="divider w-full mx-auto flex sm:hidden"></div>
                <p>Copyright Ainmhicon 2026</p>

                <p>Ainmhícon, Company Limited by Guarantee, Company No. 793565</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.3135191246683!2d-6.404527722599578!3d53.35554377229208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486772dbc7d4f509%3A0x99f42331b285eb66!2sClayton%20Hotel%20Liffey%20Valley!5e0!3m2!1sen!2suk!4v1780135186334!5m2!1sen!2suk" width='400px' height='300px' className='w-auto lg:w-100' loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
            </section>

        </footer >
    );
}
