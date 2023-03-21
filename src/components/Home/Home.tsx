import { Link } from 'react-router-dom';
import textData from '../../data/textData';
import { useAppSelector } from '../../redux/hooks';
import Header from '../Header/Header';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const language = useAppSelector((state) => state.language);

  return (
    <>
      <Header />
      <main className={styles.home}>
        <section className={styles.home__container}>
          <div className={styles.home__title_wrapper}>
            <div className={styles.home__title}>
              <span className={styles.home__title_bold}>{textData.home.find[language]} </span>
              <span className={styles.home__title_normal}>{textData.home.title[language]} </span>
              <span className={styles.home__title_bold}>{textData.home.character[language]}</span>
            </div>
            <div className={styles.home__title_description_wrapper}>
              <p className={styles.home__title_description}>
                {textData.home.description1[language]}
              </p>
              <p className={styles.home__title_description}>
                {textData.home.description2[language]}
              </p>
              <p className={styles.home__title_description}>
                {textData.home.description3[language]}
              </p>
            </div>
            <Link className={styles.home__link} to="/characters">
              {textData.home.button[language]}
            </Link>
          </div>
          <div className={styles.home__image}></div>
        </section>
      </main>
    </>
  );
};

export default Home;
