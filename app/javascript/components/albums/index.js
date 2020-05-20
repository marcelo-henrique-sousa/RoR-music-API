import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Columns, Image } from 'react-bulma-components';
import Musics from '../musics';

import AlbumsService from '../../services/albums';

import styled from 'styled-components';

const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`;

function Albums() {

  let { id } = useParams();

  const [ album, setAlbum ] = useState([]);
  async function getAlbums() {
    const response = await AlbumsService.show(id);
    setAlbum(response.data);
  }

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div>
      <Columns className='is-vcentered is-mobile is-centered'>
       <Columns.Column desktop={{size: 3}} className='has-text-centered'>
         <Image src={ album.cover_url } />
         <DivVSpaced>
            <Heading size={5} className='has-text-white'>{album.title}</Heading>
            <Heading size={6} subtitle className='has-text-white'>{album.artist_name}</Heading>
         </DivVSpaced>
       </Columns.Column>
     </Columns>
     <Musics songs={album.songs || []} />
    </div>
  );
}

export default Albums;