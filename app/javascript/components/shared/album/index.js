import React from 'react';
import { Heading, Image } from 'react-bulma-components';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const DivSpaced = styled.div`
  margin-top: 50px;
`;

function Album(props) {
  return (
    <Link to={`/album/${props.id}`}>
      <Image src={props.cover_url}/>
      <DivSpaced>
        <Heading size={6} className='has-text-white'>{props.title}</Heading>
        <Heading size={6} className='has-text-white' subtitle>{props.artist_name}</Heading>
      </DivSpaced>
    </Link>
  );
}

export default Album;