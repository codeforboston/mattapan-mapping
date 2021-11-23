import styled from '@emotion/styled';

import Header from '@/organisms/Header';
import Footer from '@/organisms/Footer';

export const Layout = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const LayoutContent = styled.div`
  /* TODO: wrap in component selector */
  flex-grow: 1;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.mediaQuery.tablet}) {
    padding: 0 32px;
  }

  @media (min-width: ${props => props.theme.mediaQuery.desktop}) {
    padding: 0 200px;
  }
`;

export const StyledHeader = styled(Header)`
  padding: 0 16px;

  @media (min-width: ${props => props.theme.mediaQuery.tablet}) {
    padding: 0 32px;
  }

  @media (min-width: ${props => props.theme.mediaQuery.desktop}) {
    padding: 0 200px;
  }
`;

export const StyledFooter = styled(Footer)`
  padding: 0 16px;

  @media (min-width: ${props => props.theme.mediaQuery.tablet}) {
    padding: 0 32px;
  }

  @media (min-width: ${props => props.theme.mediaQuery.desktop}) {
    padding: 0 200px;
  }
`;

const StandardLayout: React.FC = function StandardLayoutComponent({children}) {
  return (
    <Layout>
      <StyledHeader />
      <LayoutContent>
        {children}
      </LayoutContent>
      <StyledFooter />
    </Layout>
  );
}

export default StandardLayout;
