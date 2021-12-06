import styled from '@emotion/styled';
import mattapan_logo from '@/mattapan_mapping_logo_2.svg'


const Logo = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100px;
  height: 100px;
`

const HeaderLogo = styled(Logo)`
	width: 200px;
	height: 200px;
`


export const PowerfulPathwaysLogo = styled(Logo)`
  background-image: url('https://tinyurl.com/57ftrcev');
`;

export const CFBLogo = styled(Logo)`
  background-image: url('https://tinyurl.com/jra96rec');
`

export const MattapanMappingLogo = styled(HeaderLogo)`
  background-image: url(${mattapan_logo});
`


export const LogoContainer = styled.div`
	display: none;

	@media (min-width: ${props => props.theme.mediaQuery.tablet}) {
		display: flex;
		justify-content: center;
		align-items: center;
  }
`;
