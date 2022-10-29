import React from 'react';
import AppContext from '../ContextApp/context';
import styles from '../components/Drawer/Drawer.module.scss';

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2 className="mb-30">{title}</h2>
      <p className="opacity-6 text-center mb-30">{description}</p>
      <button onClick={() => setCartOpened(false)} className={styles.greenButton}>
        <img className="mr-10" src="img/arrow-left.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
