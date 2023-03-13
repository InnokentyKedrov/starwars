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
            <h1 className={styles.home__title}>
              <b className={styles.home__title} style={{ fontWeight: 700 }}>
                {textData.home.find[language]}
              </b>{' '}
              {textData.home.title[language]}{' '}
              <b className={styles.home__title} style={{ fontWeight: 700 }}>
                {textData.home.character[language]}
              </b>
            </h1>
            <p className={styles.home__title_description}>{textData.home.description[language]}</p>
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
