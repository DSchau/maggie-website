import React, { Fragment } from 'react';
import styled from 'react-emotion';

import { List, ListItem } from '../List';
import { RoleHeader } from './RoleHeader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
      <RoleHeader
        children={({ Subtitle, SubtitleRight }) => (
          <Fragment>
            <Subtitle>{title}</Subtitle>
            <SubtitleRight>
              {start} - {end || 'Present'}
            </SubtitleRight>
          </Fragment>
        )}
      />
      <RoleHeader
        children={({ Title, TitleRight }) => (
          <Fragment>
            <Title>{company}</Title>
            <TitleRight>{location}</TitleRight>
          </Fragment>
        )}
      />
      <List>
        {responsibilities.map(responsibility => (
          <ListItem key={responsibility}>{responsibility}</ListItem>
        ))}
      </List>
    </Container>
  );
}
