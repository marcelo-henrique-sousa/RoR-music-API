import React from 'react';
import NavBarFooter from '../../components/shared/navbar_footer';
import Discovery from  '../../components/discovery';
import SectionWrapper from '../../components/shared/section_wrapper';
// import { Container } from './styles';

function discovery() {
  return (
    <div>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavBarFooter />
    </div>
  );
}

export default discovery;