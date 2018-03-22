import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

import { Role } from '../components';

const Container = styled.div`
  padding: 0.5rem;
`;

const Category = styled.section`
  margin: 1rem 0;
`;

const Subtitle = styled.h2`
  color: #193441;
  font-size: 22px;
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.125rem 0;

  border: 2px solid #193441;
  border-left-width: 0;
  border-right-width: 0;
`;

export default function IndexPage({ data }) {
  const { resume } = data;
  const { experience } = resume.frontmatter;
  return (
    <Container>
      <Helmet title="Driven and talented financial analyst" />
      <Category>
        <Subtitle>Areas of Expertise</Subtitle>
      </Category>
      <Category>
        <Subtitle>Professional Experience</Subtitle>
        {[experience.HDR, experience.UPRR, experience.UPRRIntern].map(
          experience => <Role key={experience.company} {...experience} />
        )}
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
            company
            location
            responsibilities
            start(formatString: "MMMM YYYY")
            title
          }
          UPRR {
            company
            location
            responsibilities
            start(formatString: "MMMM YYYY")
            end(formatString: "MMMM YYYY")
            title
          }
          UPRRIntern {
            company
            location
            responsibilities
            start(formatString: "MMMM YYYY")
            end(formatString: "MMMM YYYY")
            title
          }
        }
      }
    }
  }
`;
