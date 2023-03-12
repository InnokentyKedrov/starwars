import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import styles from './Characters.module.css';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../redux/thunks';
import Modal from '../Modal/Modal';
import { ResultsType } from '../../types/types';
import Pagination from '../Pagination/Pagination';
import Sort from '../Sort/Sort';

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const [currentPageResults, setCurrentPageResults] = useState<ResultsType[]>([]);
  const language = 'en';
  // const pages = Math.ceil(state.results.length / 9);

  useEffect(() => {
    const currentPageResults = [];
    let currentPageEnd = state.currentPage * 9;
    if (currentPageEnd > state.sortResults.length) {
      currentPageEnd = state.sortResults.length;
    }

    for (let i = state.currentPage * 9 - 9; i < currentPageEnd; i++) {
      currentPageResults.push(state.sortResults[i]);
    }
    setCurrentPageResults(currentPageResults);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentPage, state.sortResults]);

  useEffect(() => {
    dispatch(fetchCharacters(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className={styles.characters}>
        <h1 className="visually_hidden">Find all your favorite character</h1>
        <section className={styles.characters__container}>
          <span className={styles.characters__language}>language: {language}</span>
          <h2 className={styles.characters__title}>
            {state.sortResults.length}{' '}
            <b className={styles.characters__title} style={{ fontWeight: 700 }}>
              Peoples
            </b>{' '}
            for you to choose your favorite
          </h2>
          <Sort />
          {state.status === 'loading' && <span className={styles.loading}></span>}
          {state.status === 'serverError' && <div className={styles.cards__serverError}></div>}
          {state.sortResults.length === 0 && state.status !== 'loading' && (
            <div className={styles.cards__sortEmpty}></div>
          )}
          {state.status === 'resolved' && (
            <ul className={styles.cards__list}>
              {currentPageResults &&
                currentPageResults.map((el: ResultsType) => <Cards card={el} key={el.name} />)}
            </ul>
          )}
        </section>
        <Pagination />
      </main>
      {state.isModal && <Modal />}
    </>
  );
};

export default Characters;
