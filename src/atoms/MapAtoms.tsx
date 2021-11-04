import styled from '@emotion/styled';

export const MapContainer = styled.div`
	position: relative;
  height: 90vh;
	width: 80vw;
	box-shadow: 0 0 2px 2px black;
	margin: 0 auto;
	margin-bottom: 24px;

	.map {
		height: 100%;
		width: 100%;
		overflow: visible;
	}
`;

export const MapTitle = styled.p`
	font-family: ${ props => props.theme.fonts.primary };
	font-size: ${ props => props.theme.fonts.fontSize.subtitle };
	text-align: center;
	margin: 24px auto;
`;
