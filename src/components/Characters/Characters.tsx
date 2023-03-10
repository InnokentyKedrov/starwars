import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import styles from './Characters.module.css';
import { useEffect } from 'react';
import { fetchCharacters } from '../../redux/thunks';
import Modal from '../Modal/Modal';
import { ResultsType } from '../../types/types';

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCharacters(state));
    console.log('state', state.results);
  }, [dispatch]);

  const language = 'en';
  return (
    <>
      <Header />
      <main className={styles.characters}>
        <h1 className="visually_hidden">Find all your favorite character</h1>
        <section className={styles.characters__container}>
          <span className={styles.characters__language}>language: {language}</span>
          <h2 className={styles.characters__title}>
            {state.count} <b style={{ fontWeight: 700 }}>Peoples</b> for you to choose your favorite
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
          <ul className={styles.cards__list}>
            {state.results.map((el: ResultsType) => (
              <Cards card={el} key={el.name} />
            ))}
          </ul>
        </section>
      </main>
      {state.isModal && <Modal />}
    </>
  );
};

export default Characters;
