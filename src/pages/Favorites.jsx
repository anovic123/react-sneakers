import React from 'react';
import BlankPage from '../components/BlankPage';
import Card from '../components/Card';
import AppContext from '../ContextApp/context';

const Favorites = () => {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      {favorites.length > 0 ? (
        <>
          <h1 className="text-center">Мои закладки</h1>
          <div className="d-flex flex-wrap mt-30">
            {favorites.map((item) => (
              <Card key={item.id} favorited={true} onFavorite={onAddToFavorite} {...item} />
            ))}
          </div>
        </>
      ) : (
        <BlankPage
          title={'Закладок нет :('}
          description={'Вы ничего не добавляли в закладки'}
          image={'img/smile-02.png'}
        />
      )}
    </div>
  );
};

export default Favorites;
