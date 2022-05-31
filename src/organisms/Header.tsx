import styled from '@emotion/styled';

import { Theme } from '@/theme/Theme';
import { HeaderLink, HeaderTitle, Link } from '@/atoms/HeaderAtoms';
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
				<Link href='/'><MattapanMappingLogo /></Link>
			</LogoContainer>
			<Link href='/' color={Theme.colors.black}><HeaderTitle>Mattapan Boston</HeaderTitle></Link>
			<div>
				<HeaderLink href='/about' color={ Theme.colors.blue }>About</HeaderLink>
				<HeaderLink href='/explore' color={ Theme.colors.blue }>Explore</HeaderLink>
				<HeaderLink href='/story' color={ Theme.colors.peach }>MapBox</HeaderLink>
				<HeaderLink href='/meet' color={ Theme.colors.teal }>Meet</HeaderLink>
				<HeaderLink href='/share' color={ Theme.colors.orange }>Share</HeaderLink>
				<HeaderLink href='/act' color={ Theme.colors.red }>Act</HeaderLink>
			</div>
		</HeaderContainer>
	);
}

export default Header;