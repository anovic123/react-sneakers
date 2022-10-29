import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

import styles from './Header.module.scss';

const Header = ({ onClickCart }) => {
  const { totalPrice } = useCart();

  return (
    <header>
      <Link to="">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="React Sneakers - logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5 mb-0">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <div className={styles.headerActions}>
        <ul className="d-flex align-center">
          <li onClick={onClickCart} className="mr-30 cu-p d-flex align-end">
            <img with={30} height={30} src="img/cart.svg" alt="Cart" />
            <span className="total-price">{totalPrice} $</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="favorites">
              <img with={28} height={28} src="img/heart.svg" alt="Heart" />
            </Link>
          </li>
          <li>
            <Link to="orders">
              <img with={28} height={28} src="img/user.svg" alt="User" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
