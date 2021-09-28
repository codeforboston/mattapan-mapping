import styled from '@emotion/styled'

const Link = styled.a`
    display: inline-block;
    text-decoration: none;
`;

const LinkText = styled.span`
    padding: 0 ${props => props.theme.spacing.s};
    font-family: ${props => props.theme.fonts.dm};
    font-size: 28px;
    color: ${ props => props.theme.colors.black };
    transition: color ease .2s;

    &:hover {
        color: ${ props => props.theme.colors.red };
    }
`

export const HeaderTitle = styled.span`
    font-family: ${ props => props.theme.fonts.montserrat };
    font-size: 36px;
    font-weight: ${ props => props.theme.fonts.fontWeight.bold };
    color: ${ props => props.theme.colors.black };
    padding: 0 ${props => props.theme.spacing.s};
`

export const HeaderLink = ({ href, children }: { href: string, children: string }) => {
    return (
        <Link href={href}> <LinkText>{children}</LinkText></Link>
    )
}
