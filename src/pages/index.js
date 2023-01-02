import React, { Fragment } from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

import { List, ListItem, Role, RoleHeader } from '../components';

const Container = styled.div`
  padding: 0.5rem;
`;

const Category = styled.section`
  margin: 1rem 0;
`;

const Title = styled.h2`
  color: #193441;
  font-size: 22px;
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.125rem 0;

  border: 2px solid #193441;
  border-left-width: 0;
  border-right-width: 0;
`;

const Description = styled.p({
  margin: 0,
  padding: 0,
});

export default function IndexPage({ data }) {
  const { resume } = data;
  const { education, experience, skills } = resume.frontmatter;
  return (
    <Container>
      <Helmet title="Driven and talented financial analyst" meta={[
        { name: 'robots', content: 'noindex, nofollow' }
      ]} />
      <Category id="professional-experience">
        <Title>Professional Experience</Title>
        {[experience.HDR, experience.UPRR, experience.UPRRIntern].map(
          experience => (
            <div
              css={{ marginBottom: '1rem' }}
              key={`${experience.company}-${experience.title}`}
            >
              <Role {...experience} />
            </div>
          )
        )}
      </Category>
      <Category id="education">
        <Title>Education</Title>
        {education.map(({ name, description, end, gpa, location, start }) => (
          <div css={{ marginBottom: '1rem' }}>
            <RoleHeader
              children={({ Subtitle, SubtitleRight }) => (
                <Fragment>
                  <Subtitle>
                    {name}, <i css={{ fontWeight: 'normal' }}>{location}</i>
                  </Subtitle>
                  <SubtitleRight>
                    {start} - {end || 'Present'}
                  </SubtitleRight>
                </Fragment>
              )}
            />
            <div css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Description>{description}</Description>
              {gpa && (
                <Description>
                  <strong>GPA: </strong>
                  {gpa}
                </Description>
              )}
            </div>
          </div>
        ))}
      </Category>
      <Category id="techincal-skills">
        <Title>Technical Skills</Title>
        <List>
          {skills.map(skill => <ListItem key={skill}>{skill}</ListItem>)}
        </List>
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
          description
          end(formatString: "MMMM YYYY")
          gpa
          location
          start(formatString: "MMMM YYYY")
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
        skills
      }
    }
  }
`;
