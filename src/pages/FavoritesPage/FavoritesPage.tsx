import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { FavoritesContainer, Text } from './FavoritesPage.styled';
import { CardList } from '../../components/CardList/CardList';
import { MyLoader } from '../../components/Loader/Loader';
import { fetchFavorites } from '../../redux/favorites/operations';
import { selectFavorites, selectIsLoadingFav, selectErrorFav } from '../../redux/selectors';
import { AppDispatch } from '../../redux/store';
interface FavoriteProps{
  authUser: any;
}

const FavoritesPage: React.FC <FavoriteProps>= ({authUser}) => {

  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector(selectFavorites);
const isLoadingFav = useSelector(selectIsLoadingFav);
const errorFav = useSelector(selectErrorFav);

  useEffect(() => {
    if (authUser && authUser.uid) {
    dispatch(fetchFavorites(authUser.uid));
  }
}, [dispatch, authUser]);

  return (
    <FavoritesContainer>
          {isLoadingFav && !errorFav && <MyLoader/>}
    {favorites.length > 0 ? (
        <CardList teachers={favorites} authUser={authUser} />
      ) : (
        <Text>Favorite teachers haven't been selected yet</Text>
      )}
    </FavoritesContainer>
  );
};

export default FavoritesPage;
