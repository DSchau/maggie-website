import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

const Container = styled.div``;

const Category = styled.section`
  margin: 1rem 0;
`;

const Subtitle = styled.h2`
  color: #193441;
  font-size: 22px;
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.125rem 0;

  border-bottom: 2px solid #193441;
`;

export default function IndexPage({ data }) {
  const { resume } = data;
  return (
    <Container>
      <Helmet title="Driven and talented financial analyst" />
      <Category>
        <Subtitle>Profile</Subtitle>
        <div dangerouslySetInnerHTML={{ __html: resume.html }} />
      </Category>
      <Category>
        <Subtitle>Areas of Expertise</Subtitle>
      </Category>
      <Category>
        <Subtitle>Work Experience</Subtitle>
      </Category>
      <Category>
        <Subtitle>Education</Subtitle>
      </Category>
      <Category>
        <Subtitle>Technical Skills</Subtitle>
      </Category>
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    resume: markdownRemark(fileAbsolutePath: { regex: "/content/resume/" }) {
      html
      frontmatter {
        education {
          name
          start
        }
        expertise
        experience {
          HDR {
            responsibilities
            start
          }
        }
      }
    }
  }
`;
