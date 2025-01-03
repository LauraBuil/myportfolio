import { Link, LinkProps, To } from 'react-router-dom'
import React from 'react'

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, LinkProps {
    to: To;
    children: string;
}

//...props: permet d'attacher des props à l'élément sans avoir à le réécrire
export function ExternalLink({ to, children, ...props }: ExternalLinkProps) {
    const isExternal = typeof to === 'string' && /^https?:\/\//.test(to)
    if (isExternal) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        )
    }
    return <Link to={to} {...props}>{children}</Link>
}