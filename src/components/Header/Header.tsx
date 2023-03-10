import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt="Star Wars logo" />
        <nav className={styles.header__navigation}>
          <NavLink className={styles.header__link} to="/" end>
            Home
          </NavLink>
          <NavLink className={styles.header__link} to="/characters" end>
            Characters
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
