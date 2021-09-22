import styled from '@emotion/styled'

const Link = styled.a`
    display: inline-block;
    text-decoration: none;
`;

const LinkText = styled.span`
    padding: 0 ${ props => props.theme.spacing.s };
    font-family: ${ props => props.theme.fonts.dm };
    font-size: 28px;
    color: white;
    transition: color ease .2s;

    &:hover {
        color: skyblue;
    }
`

export const HeaderTitle = styled.span`
    font-family: ${ props => props.theme.fonts.dm };
    font-size: 28px;
    color: white;
    padding: 0 ${ props => props.theme.spacing.s };
`

export const HeaderLink = ({ href, children }: { href: string, children: string }) => {
    return (
        <Link href={ href }> <LinkText>{ children }</LinkText></Link>
    )
}
