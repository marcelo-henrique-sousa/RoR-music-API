import React from 'react';
import { Container, Section } from 'react-bulma-components';

// import { Container } from './styles';

function SectionWrapper(props) {
  return (
    <Section>
      <Container>
        {props.children}
      </Container>
    </Section>
  );
}

export default SectionWrapper;