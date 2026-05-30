type Props = React.PropsWithChildren & {
    href: string
}

export default function LinkButton({ children, href }: Props) {
    return (
        <a href={href} className="btn scale-100 transition-all duration-250 ease-in-out hover:scale-110">{children}</a>
    );
}
