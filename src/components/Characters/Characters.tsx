import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Header from '../Header/Header';
import Cards from './components/Cards/Cards';
import styles from './Characters.module.css';
import { useEffect, useState } from 'react';
import { fetchCharacters, fetchCharactersWookiee } from '../../redux/thunks';
import Modal from '../Modal/Modal';
import { ResultsType } from '../../types/types';
import Sidebar from './components/Sidebar/Sidebar';
import CharactersHeader from './components/CharactersHeader/CharactersHeader';

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const [currentPageResults, setCurrentPageResults] = useState<ResultsType[]>([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

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
        <div className={styles.characters__wrapper}>
          {width > 1046 && <Sidebar />}
          <section className={styles.characters__container}>
            <CharactersHeader />
            {width <= 1046 && <Sidebar />}
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
        </div>
      </main>
      {state.isModal && <Modal />}
    </>
  );
};

export default Characters;
