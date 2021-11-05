import styled from '@emotion/styled';

import { Theme } from '@/theme/Theme';
import { HeaderLink, HeaderTitle, Link } from '@/atoms/HeaderAtoms';
import { MattapanMappingLogo, LogoContainer } from '@/atoms/Logos';

const HeaderContainer = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
	background-color: white;

	.header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		max-width: 1200px;
	}
`;

export default function Header() {
	return (
		<HeaderContainer>
			<div className='header'>
				<LogoContainer>
					<Link href='/'><MattapanMappingLogo /></Link>
				</LogoContainer>
				<Link href='/' color={Theme.colors.black}><HeaderTitle>Mattapan Boston</HeaderTitle></Link>
				<div>
					<HeaderLink href='/about' color={ Theme.colors.blue }>About</HeaderLink>
					<HeaderLink href='/explore' color={ Theme.colors.peach }>Explore</HeaderLink>
					<HeaderLink href='/meet' color={ Theme.colors.teal }>Meet</HeaderLink>
					<HeaderLink href='/share' color={ Theme.colors.orange }>Share</HeaderLink>
					<HeaderLink href='/getInvolved' color={ Theme.colors.red }>Get Involved</HeaderLink>
				</div>
			</div>
		</HeaderContainer>
	);
}
