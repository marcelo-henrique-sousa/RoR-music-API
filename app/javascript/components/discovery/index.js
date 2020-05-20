import React, { useState, useEffect } from 'react';
import { Columns, Heading } from 'react-bulma-components';

import AlbumsService from  '../../services/albums';

import Album from '../shared/album';

import styled from 'styled-components';

const DivSpaced = styled.div`
  margin-top: 50px;
`;

function Discovery() {

  //states
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recommendAlbums, setRecommendAlbums] = useState([]);

  async function getAlbums() {
    const response = await AlbumsService.index();
    setRecentAlbums(response.data['recent_albums']);
    setRecommendAlbums(response.data['recommend_albums']);
  }

  useEffect(() => {
    getAlbums();
  }, []);

  const recent_albums_components = recentAlbums.map((item, key) => (
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album 
      id={ item.id }
      artist_name={item.artist_name} 
      title={ item.title } 
      cover_url={ item.cover_url }/>
    </Columns.Column>
  ));
  const recommend_albums_components = recommendAlbums.map((item, key) => (
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album 
      id={ item.id }
      artist_name={item.artist_name} 
      title={ item.title } 
      cover_url={ item.cover_url }/>
    </Columns.Column>
  ));

  // const albums = albums_fake.map((item, key) => (
  //   <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
  //     <Album 
  //     id={ item.id }
  //     artist_name={item.artist_name} 
  //     title={ item.title } 
  //     cover_url={ item.cover_url }/>
  //   </Columns.Column>
  // ))

  return (
    <div>
      { recent_albums_components.length > 0 && 
        <div>
          <Heading className='has-text-white' size={4}>
            Tocadas recentemente
          </Heading>
          <Columns className='is-mobile'>
            {recent_albums_components}
          </Columns>
        </div>
      }

      { recommend_albums_components.length > 0 && 
        <DivSpaced>
          <Heading className='has-text-white' size={4}>
            Recomendadas
          </Heading>
          <Columns className='is-mobile'>
            {recommend_albums_components}
          </Columns>
        </DivSpaced>
      }
    </div>
  );
}

export default Discovery;