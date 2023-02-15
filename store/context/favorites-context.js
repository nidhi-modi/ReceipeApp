import React, {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: id => {},
  removeFavorites: id => {},
});

const FavoritesContextProvider = ({children}) => {
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  function addFavorite(id) {
    setFavoriteMealId(currentIds => [...currentIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealId(currentIds =>
      currentIds.filter(mealids => mealids !== id),
    );
  }

  const value = {
    ids: favoriteMealId,
    addFavorites: addFavorite,
    removeFavorites: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
