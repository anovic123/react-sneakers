import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BlankPage.module.scss';

const BlankPage = ({ title, image, description }) => {
  return (
    <div className={styles.blankPage}>
      <img src={image} alt="smile" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="react-sneakers/">
        <button className={styles.greenButton}>
          <img src="img/arrow.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default BlankPage;
