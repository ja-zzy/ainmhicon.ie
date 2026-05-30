import LinkButton from "./link-button";

export default function NavBar() {
    return (
        <nav className='w-full h-25 flex flex-row px-10'>
            <a href='/' className='mr-auto' >
                <img src='/logo.webp' className='h-full' />
            </a>
            <div className='flex flex-row self-center gap-2'>
                <LinkButton href='/'>Home</LinkButton>
                <LinkButton href='/faq'>FAQ</LinkButton>
                <LinkButton href='/pricing'>Pricing</LinkButton>
                <LinkButton href='/code-of-conduct'>Code of Conduct</LinkButton>
                <LinkButton href='/contact'>Contact</LinkButton></div>
        </nav>
    );
}
