import React from 'react';

import SectionWrapper from '../../components/shared/section_wrapper';
import NavBarFooter from '../../components/shared/navbar_footer';
import Albums from '../../components/albums';
// import { Container } from './styles';

function Album() {
  return (
  <div>
    <SectionWrapper>
      <Albums />
      <NavBarFooter />
    </SectionWrapper>
  </div>
  );
}

export default Album;