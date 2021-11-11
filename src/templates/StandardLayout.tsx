import styled from '@emotion/styled';

import Header from '@/organisms/Header';
import { Footer } from '@/organisms/Footer';

const Layout = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .layout-content {
    flex-grow: 1;

    /* TODO: temporary */
    width: 100%;
  }
`;

const StandardLayout: React.FC = function StandardLayoutComponent({children}) {
  return (
    <Layout>
      <Header />
      <div className="layout-content">
        {children}
      </div>
      <Footer />
    </Layout>
  );
}

export default StandardLayout;