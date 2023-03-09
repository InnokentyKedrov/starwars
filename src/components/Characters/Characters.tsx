import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Header from '../Header/Header';
import styles from './Characters.module.css';

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  // const language = useAppSelector((state) => state.language);
  const language = 'en';
  return (
    <>
      <Header />
      <main className={styles.characters__container}>
        <h1 className={styles.visually_hidden}>Find all your favorite character</h1>
        <span className={styles.characters__language}>language: {language}</span>
        <h2 className={styles.characters__title}>
          60 <b style={{ fontWeight: 700 }}>Peoples</b> for you to choose your favorite
        </h2>
        <form className={styles.sort__form}>
          <label className={styles.sort__label}>
            color eye
            <select className={styles.sort__select}>
              <option className={styles.sort__select_option} value="all">
                All
              </option>
              <option className={styles.sort__select_option} value="brown">
                Brown
              </option>
              <option className={styles.sort__select_option} value="blue">
                Blue
              </option>
              <option className={styles.sort__select_option} value="red">
                Red
              </option>
              <option className={styles.sort__select_option} value="white">
                White
              </option>
            </select>
          </label>
        </form>
      </main>
    </>
  );
};

export default Characters;
