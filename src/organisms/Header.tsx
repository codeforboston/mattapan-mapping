import styled from '@emotion/styled';

import { HeaderLink, HeaderTitle } from '../atoms/HeaderAtoms';

const HeaderContainer = styled.div`
	background-color: black;
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
			<HeaderLink href='/'>Overview</HeaderLink>
			<HeaderLink href='#work'>Work</HeaderLink>
			<HeaderLink href='#connect'>Connect</HeaderLink>
		</HeaderContainer>
	);
}
