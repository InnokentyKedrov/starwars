import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import textData from '../../data/textData';
import { useAppSelector } from '../../redux/hooks';

const Header: React.FC = () => {
  const language = useAppSelector((state) => state.language);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img className={styles.header__logo} src={logo} alt="Star Wars logo" />
        <nav className={styles.header__navigation}>
          <NavLink className={styles.header__link} to="/" end>
            {textData.header.home[language]}
          </NavLink>
          <NavLink className={styles.header__link} to="/characters" end>
            {textData.header.characters[language]}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
