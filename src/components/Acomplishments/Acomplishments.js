import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 40, text: 'Contributions to Github', }

];

const Acomplishments = () => (
  <Section nopadding>
    <SectionDivider />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      <Box>
        <BoxNum>33</BoxNum>
        <BoxText>Career Change at age</BoxText>
      </Box>
    </Boxes>
  </Section>
);

export default Acomplishments;
