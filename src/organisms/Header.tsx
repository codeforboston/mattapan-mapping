import styled from '@emotion/styled';

import { Theme } from '@/theme/Theme';
import { HeaderLink, HeaderTitle, StyledLink } from '@/atoms/HeaderAtoms';
import { MattapanMappingLogo, LogoContainer } from '@/atoms/Logos';

const HeaderContainer = styled.div`
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Header: React.FC<{className?: string}> = function HeaderComponent({className}) {
	return (
		<HeaderContainer className={className}>
			<LogoContainer>
        <StyledLink to='/'><MattapanMappingLogo /></StyledLink>
			</LogoContainer>
      <StyledLink to='/' color={Theme.colors.black}><HeaderTitle>Mattapan Boston</HeaderTitle></StyledLink>
			<div>
				<HeaderLink href='/about' color={ Theme.colors.blue }>About</HeaderLink>
				<HeaderLink href='/explore' color={ Theme.colors.peach }>Explore</HeaderLink>
				<HeaderLink href='/meet' color={ Theme.colors.teal }>Meet</HeaderLink>
				<HeaderLink href='/share' color={ Theme.colors.orange }>Share</HeaderLink>
				<HeaderLink href='/getInvolved' color={ Theme.colors.red }>Get Invovled</HeaderLink>
			</div>
		</HeaderContainer>
	);
}

export default Header;