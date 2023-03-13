import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import styles from './Characters.module.css';
import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharactersWookiee } from '../../redux/thunks';
import Modal from '../Modal/Modal';
import { ResultsType } from '../../types/types';
import Pagination from '../Pagination/Pagination';
import Sort from '../Sort/Sort';
import CardsWookiee from '../Cards/CardsWookiee';
import ModalWookiee from '../Modal/ModalWookiee';
import textData from '../../data/textData';

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const language = useAppSelector((state) => state.language);
  const [currentPageResults, setCurrentPageResults] = useState<ResultsType[]>([]);

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
    if (state.language === 'en') dispatch(fetchCharacters(state));
    else dispatch(fetchCharactersWookiee(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.language]);

  return (
    <>
      <Header />
      <main className={styles.characters}>
        <h1 className="visually_hidden">Find all your favorite character</h1>
        <section className={styles.characters__container}>
          <span className={styles.characters__language}>
            {textData.characters.language[language]}: {state.language}
          </span>
          <h2 className={styles.characters__title}>
            {state.sortResults.length}{' '}
            <b className={styles.characters__title} style={{ fontWeight: 700 }}>
              {textData.characters.titleBold[language]}
            </b>{' '}
            {textData.characters.title[language]}
          </h2>
          <Sort />
          {state.status === 'loading' && <span className={styles.loading}></span>}
          {state.sortResults.length === 0 && state.status !== 'loading' && (
            <div className={styles.cards__sortEmpty}></div>
          )}
          {state.status === 'resolved' && (
            <>
              {state.language === 'en' && (
                <ul className={styles.cards__list}>
                  {currentPageResults &&
                    currentPageResults.map((el: ResultsType) => <Cards card={el} key={el.name} />)}
                </ul>
              )}
              {state.language === 'wookiee' && (
                <ul className={styles.cards__list}>
                  {currentPageResults &&
                    currentPageResults.map((el: ResultsType) => (
                      <CardsWookiee card={el} key={el.whrascwo} />
                    ))}
                </ul>
              )}
            </>
          )}
        </section>
        <Pagination />
      </main>
      {state.language === 'en' && state.isModal && <Modal />}
      {state.language === 'wookiee' && state.isModal && <ModalWookiee />}
    </>
  );
};

export default Characters;
