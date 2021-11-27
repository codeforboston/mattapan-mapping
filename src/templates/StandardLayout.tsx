import styled from '@emotion/styled';

import Header from '@/organisms/Header';
import Footer from '@/organisms/Footer';

const Layout = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const LayoutContent = styled.div`
  /* TODO: wrap in component selector */
  flex-grow: 1;

  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
`;

const StyledHeader = styled(Header)`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
`;

const StyledFooter = styled(Footer)`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10%;
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