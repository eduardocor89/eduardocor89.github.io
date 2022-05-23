import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to < br/>
        My first portifolio 
      </SectionTitle>
      <SectionText>
        This is my very first website built using node.js with the React libraries
      </SectionText>
      <Button onClick={() => window.location = 'https://youtu.be/1m6en0SQNFs?t=1'}>Click Me!</Button>
    </LeftSection>

  </Section>
); 

export default Hero;