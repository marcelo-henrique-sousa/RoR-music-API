import React from 'react';
import SectionWrapper from '../../components/shared/section_wrapper';
import { Heading } from 'react-bulma-components';
import NavBarFooter from '../../components/shared/navbar_footer';
import Favorites from '../../components/favorites';

function favorites() {

  return (
    <div>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Favoritos</Heading>
        <Favorites />
      </SectionWrapper>
      <NavBarFooter />
    </div>
  );
}

export default favorites;