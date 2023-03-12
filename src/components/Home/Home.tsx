import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <section className={styles.home__container}>
          <div className={styles.home__title_wrapper}>
            <h1 className={styles.home__title}>
              <b className={styles.home__title} style={{ fontWeight: 700 }}>
                Find
              </b>{' '}
              all your favorite{' '}
              <b className={styles.home__title} style={{ fontWeight: 700 }}>
                character
              </b>
            </h1>
            <p className={styles.home__title_description}>
              You can find out all the information about your favorite characters
            </p>
            <Link className={styles.home__link} to="/characters">
              See more...
            </Link>
          </div>
          <div className={styles.home__image}></div>
        </section>
      </main>
    </>
  );
};

export default Home;
