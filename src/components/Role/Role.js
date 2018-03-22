import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const JustifyContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const JobTitle = styled.h2`
  font-size: 16px;
  margin: 0;
`;

const Dates = styled(JobTitle)`
  font-weight: 400;
`;

const CompanyTitle = styled.h1`
  font-size: 18px;
  margin: 0.25rem 0;
`;

const Location = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin: 0.25rem 0;
`;

const List = styled.ul`
  margin-bottom: 0;
`;

const ListItem = styled.li``;

export function Role({
  company,
  location,
  title,
  start,
  end,
  responsibilities,
}) {
  return (
    <Container>
      <JustifyContent>
        <JobTitle>{title}</JobTitle>
        <Dates>
          {start} - {end || 'Present'}
        </Dates>
      </JustifyContent>
      <JustifyContent>
        <CompanyTitle>{company}</CompanyTitle>
        <Location>{location}</Location>
      </JustifyContent>
      <List>
        {responsibilities.map(responsibility => (
          <ListItem key={responsibility}>{responsibility}</ListItem>
        ))}
      </List>
    </Container>
  );
}
