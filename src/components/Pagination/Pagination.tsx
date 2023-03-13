import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentPage, setLanguage } from '../../redux/slice';
import styles from './Pagination.module.css';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const pages = Math.ceil(state.sortResults.length / 9);

  const [disableLeft, setDisableLeft] = useState(state.currentPage === 1 ? true : false);
  const [disableRight, setDisableRight] = useState(state.currentPage === pages ? true : false);

  const onClickLeft = () => {
    if (state.currentPage > 1) {
      dispatch(setCurrentPage(String(state.currentPage - 1)));
    }
  };

  const onClickRight = () => {
    if (state.currentPage < pages) {
      dispatch(setCurrentPage(String(state.currentPage + 1)));
    }
  };

  const changeLanguage = () => {
    if (state.language === 'en') dispatch(setLanguage('wookie'));
    else dispatch(setLanguage('en'));
  };

  useEffect(() => {
    setDisableRight(state.currentPage === pages ? true : false);
    setDisableLeft(state.currentPage === 1 ? true : false);
  }, [state.currentPage, pages]);

  return (
    <section className={styles.pagination__container}>
      <ul className={styles.pagination__list}>
        <li className={styles.pagination__item}>
          <button
            className={disableLeft ? styles.pagination__buttonDisabled : styles.pagination__button}
            onClick={onClickLeft}
          >
            {'<'}
          </button>
        </li>
        <li className={styles.pagination__item}>
          <span className={styles.pagination__span}>
            {state.currentPage}/{pages}
          </span>
        </li>
        <li className={styles.pagination__item}>
          <button
            className={disableRight ? styles.pagination__buttonDisabled : styles.pagination__button}
            onClick={onClickRight}
          >
            {'>'}
          </button>
        </li>
      </ul>
      <span className={styles.pagination__language} onClick={changeLanguage}></span>
    </section>
  );
};

export default Pagination;
