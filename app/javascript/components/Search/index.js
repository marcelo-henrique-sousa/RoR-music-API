import React, { useState, useEffect } from 'react';
import SearchBar from './SerachBar';
import Categories from '../shared/categories';
import { Columns } from 'react-bulma-components';
import ResultsTab from '../shared/resultsTab';

import SearchService from '../../services/search';
import CategorieService from '../../services/categories';

function Search() {

  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

   async function fetchCategorySearch(id) {
     const response = await CategorieService.show(id);
     setAlbums(response.data['albums']);
     setArtists(response.data['artists']);
     setSongs(response.data['songs']);
  }

   async function fetchSearch(query) {
     const response = await SearchService.index(query);
     setAlbums(response.data['albums']);
     setArtists(response.data['artists']);
     setSongs(response.data['songs']);
  }

  return (
    <div>
      <Columns>
        <Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
          <SearchBar fetchSearch={fetchSearch} />
        </Columns.Column>
      </Columns>
      <ResultsTab albums={albums} artists={artists} songs={songs}/>
      <Categories fetchCategorySearch={fetchCategorySearch} />
    </div>
  );
}

export default Search;
