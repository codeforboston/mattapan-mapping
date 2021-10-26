import styled from '@emotion/styled';

export const HeaderLogo = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100px;
  height: 100px;
`

export const PowerfulPathwaysLogo = styled(HeaderLogo)`
  background-image: url('https://tinyurl.com/57ftrcev');
`;

export const CFBLogo = styled(HeaderLogo)`
  background-image: url('https://tinyurl.com/jra96rec');
`;

export const MattapanMappingLogo = styled(HeaderLogo)`
  background-image: url('./mattapan_mapping_logo.svg')
`;

export const LogoContainer = styled.div`
	display: none;

	@media (min-width: ${props => props.theme.mediaQuery.tablet}) {
		display: flex;
		justify-content: center;
		align-items: center;
  }
`;
