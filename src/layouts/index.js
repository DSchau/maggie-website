import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import 'normalize.css';

import { Footer, Header } from '../components';
import '../style/global';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const Content = styled.main`
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export default function TemplateWrapper({ children, data }) {
  const { meta } = data;
  return (
    <Container>
      <Helmet
        titleTemplate={`${meta.title} | %s`}
        meta={[{ name: 'description', content: meta.description }]}
      />
      <Header />
      <Content>{children()}</Content>
      <Footer />
    </Container>
  );
}

export const pageQuery = graphql`
  query LayoutQuery {
    meta: contentYaml {
      title
      description
    }
  }
`;
