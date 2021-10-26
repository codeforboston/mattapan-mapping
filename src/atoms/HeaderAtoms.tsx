import styled from '@emotion/styled'

export const Link = styled.a`
    display: inline-block;
    text-decoration: none;
`;

const LinkText = styled.span<{ color: string }>`
    padding: 0 ${props => props.theme.spacing.s};
    font-family: ${props => props.theme.fonts.dm};
    font-size: ${props => props.theme.fonts.fontSize.regular};
    color: ${ props => props.theme.colors.black };
    transition: color ease .2s;

    &:hover {
        color: ${ props => props.color };
    }
`

export const HeaderTitle = styled.span`
    font-family: ${ props => props.theme.fonts.montserrat };
    font-size: ${props => props.theme.fonts.fontSize.subtitle};
    font-weight: ${ props => props.theme.fonts.fontWeight.bold };
    color: ${ props => props.theme.colors.black };
    padding: 0 ${props => props.theme.spacing.s};
`

export const HeaderLink = ({ href, children, color }: { href: string, children: string, color: string; }) => {
    return (
        <Link href={href}> <LinkText color={ color }>{children}</LinkText></Link>
    )
}

export const ExternalLink = ({ href, children }: { href: string, children: any }) => {
    return (
        <Link target="_blank" href={href}>{children}</Link>
    )
}
