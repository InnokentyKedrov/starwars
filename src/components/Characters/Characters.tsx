import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import styles from './Characters.module.css';
import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharactersWookiee } from '../../redux/thunks';
import Modal from '../Modal/Modal';
import { ResultsType } from '../../types/types';
import Pagination from '../Pagination/Pagination';
import textData from '../../data/textData';
import Dropdown from '../Dropdown/Dropdown';
import { genderSort } from '../const/const';
// import { eyeColorSort, genderSort } from '../const/const';

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
          <ul className={styles.dropdown__list}>
            <Dropdown sort={genderSort} title={textData.sortLabel.gender[language]} />
            {/* <Dropdown sort={eyeColorSort} title={textData.sortLabel.eye_color[language]} /> */}
          </ul>
          {state.status === 'loading' && <span className={styles.loading}></span>}
          {state.sortResults.length === 0 && state.status !== 'loading' && (
            <div className={styles.cards__sortEmpty}></div>
          )}
          {state.status === 'resolved' && (
            <ul className={styles.cards__list}>
              {currentPageResults &&
                currentPageResults.map((el: ResultsType, index: number) => {
                  return <Cards card={el} key={index} />;
                })}
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
