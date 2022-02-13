import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey There, <br />
        Welcome to my website
      </SectionTitle>
      <SectionText>
        My name is Karim Chemaytilly,<br /> I am a Software Engineering 
        student @ EPITA, Paris, <br />
        my goal is to become a Backend Software Engineerand make
        an impact in the world of technology & programming
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/karimchem'}>Get in Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;