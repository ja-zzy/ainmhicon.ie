import LinkButton from "./link-button";

export default function NavBar() {
    return (
        <nav className='navbar w-full h-25 flex flex-row px-10 bg-base-100 justify-between'>

            <div className="navbar-start h-full w-auto">
                <a href='/' className='mr-auto shrink-0  h-full' >
                    <img src='/logo.webp' className='h-full' />
                </a></div>

            <div className="navbar-end w-auto">
                <div className='flex-row self-center gap-2 hidden md:flex w-auto'>
                    <LinkButton href='/'>Home</LinkButton>
                    <LinkButton href='/faq'>FAQ</LinkButton>
                    <LinkButton href='/pricing'>Pricing</LinkButton>
                    <LinkButton href='/code-of-conduct'>Code of Conduct</LinkButton>
                    <LinkButton href='/contact'>Contact</LinkButton>
                    <LinkButton href='https://reg.ainmhicon.ie'>Login</LinkButton>
                </div>

                <div className="dropdown visible md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-auto p-2 shadow right-3">
                        <li><a className='whitespace-nowrap'>Home</a></li>
                        <li><a className='whitespace-nowrap'>FAQ</a></li>
                        <li><a className='whitespace-nowrap'>Pricing</a></li>
                        <li><a className='whitespace-nowrap'>Code of Conduct</a></li>
                        <li><a className='whitespace-nowrap'>Contact</a></li>
                        <li><a className='whitespace-nowrap'>Login</a></li>
                    </ul>
                </div>
            </div>

        </nav >
    );
}
