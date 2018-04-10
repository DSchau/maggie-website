import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  color: #444;
  margin: 0;
`;

const SubtitleRight = styled(Subtitle)`
  font-weight: 400;
`;

const Title = styled.h1`
  font-size: 18px;
  margin: 0.25rem 0;
`;

const TitleRight = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin: 0.25rem 0;
`;

export function RoleHeader({ children }) {
  return (
    <Container>
      {children({
        Subtitle,
        SubtitleRight,
        Title,
        TitleRight,
      })}
    </Container>
  );
}
