import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import textData from '../../data/textData';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLanguage } from '../../redux/slice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language);

  const changeLanguage = () => {
    if (language === 'en') dispatch(setLanguage('wookiee'));
    else dispatch(setLanguage('en'));
  };

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

        <div className={styles.language}>
          <label className={styles.switch}>
            <input type="checkbox" onClick={changeLanguage} />
            <span
              className={`${styles.slider} ${language === 'en' && styles.sliderEn} ${
                language === 'wookiee' && styles.sliderWo
              }  ${styles.round}`}
            ></span>
          </label>
          <div className={styles.languageText}>
            <span
              className={`${styles.languageWo} ${language === 'wookiee' && styles.activeLanguage}`}
            >
              wookiee
            </span>
            <span className={`${styles.languageEn} ${language === 'en' && styles.activeLanguage}`}>
              english
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
