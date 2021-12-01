import styled from '@emotion/styled'
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
`;

const LinkText = styled.span<{ color: string }>`
    padding: 0 ${props => props.theme.spacing.s};
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fonts.fontSize.regular};
    color: ${ props => props.theme.colors.black };
    transition: color ease .2s;

    &:hover {
        color: ${ props => props.color };
    }
`

export const HeaderTitle = styled.span`
    font-family: ${ props => props.theme.fonts.header };
    font-size: ${props => props.theme.fonts.fontSize.subtitle};
    font-weight: ${ props => props.theme.fonts.fontWeight.bold };
    color: ${ props => props.theme.colors.black };
    padding: 0 ${props => props.theme.spacing.s};
`

export const HeaderLink = ({ href, children, color }: { href: string, children: string, color: string; }) => {
    return (
      <StyledLink to={href}> <LinkText color={color}>{children}</LinkText></StyledLink>
    )
}

export const ExternalLink = ({ href, children }: { href: string, children: any }) => {
    return (
      <StyledLink target="_blank" to={href}>{children}</StyledLink>
    )
}
