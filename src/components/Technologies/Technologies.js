import React from 'react';
import { DiFirebase, DiJavascript, DiJavascript1, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
const Technologies = () =>  (
  <Section nopadding id="tech">
    <SectionDivider />

    <SectionTitle>Technologies</SectionTitle>
    <br />
    <SectionText>
      I've worked with back-end and front-end technologies to build my projects. With honorable mentions, I'd like to name StackExchange, RealPython, and Github as the main contributors to my journey as developer.
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size='4rem'/>
        <br/> 
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size='4rem'/>
        <br />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='4rem'/>
        <br />
        <ListContainer>
          <ListTitle>Libraries</ListTitle>
          <ListParagraph>
            Experience with <br />
          React
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);
export default Technologies;
