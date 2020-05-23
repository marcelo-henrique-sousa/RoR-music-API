import React, { useState, useEffect } from 'react';
import ResultsTab from '../shared/resultsTab';

import FavoriteService from '../../services/favorites';

function Favorites() {

  const [favorites, setFavorites] = useState({});

  async function fetchFavorites() {
    const response = await FavoriteService.index();
    //console.log(response.data);
    setFavorites(response.data);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      <ResultsTab albums={favorites.albums || []} artists={favorites.artists || []} songs={favorites.songs || []}/>
    </div>
  );
}

export default Favorites;