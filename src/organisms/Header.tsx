import styled from '@emotion/styled';

import { HeaderLink, HeaderTitle } from '../atoms/HeaderAtoms';

const HeaderContainer = styled.div`
	background-color: silver;
	height: 50px;
	width: 100%;
	position: fixed;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	z-index: 99;
`;

const Spacer = styled.div`
	flex: 1;
`

export default function Header() {
	return (
		<HeaderContainer>
			<HeaderTitle>Mattapan Boston</HeaderTitle>
			<Spacer />
			<HeaderLink href='/'>View</HeaderLink>
			<HeaderLink href='#work'>Engage</HeaderLink>
			<HeaderLink href='#connect'>Listen</HeaderLink>
			<HeaderLink href='#explore'>Explore</HeaderLink>
		</HeaderContainer>
	);
}
