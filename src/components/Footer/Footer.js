import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SectionTitle, Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section> 
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call:</LinkTitle>
            <LinkItem href='tel:678-3280970'>Click to call!</LinkItem> 
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email:</LinkTitle>
            <LinkItem href='mailto:eduardocor89@gmail.com'>Click to message!</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Providing creative solutions to my clients</Slogan>
          </CompanyContainer>
          <SocialIcons href='https://github.com/eduardocor89'>
            <AiFillGithub size={"4rem"}  />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/ed-cordero89/'>
            <AiFillLinkedin size={"4rem"}  />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/squidwardoatl'>
            <AiFillInstagram  size={"4rem"}  />
          </SocialIcons>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
    );
  };


export default Footer;
