import React from 'react';
import SectionWrapper from '../../components/shared/section_wrapper';
import { Heading } from 'react-bulma-components';
import Search from '../../components/Search';
import NavBarFooter from '../../components/shared/navbar_footer';
// import { Container } from './styles';

function search() {
  return (
    <div>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Buscar</Heading>
        <Search />
      </SectionWrapper>
      <NavBarFooter />
    </div>
  );
}

export default search;