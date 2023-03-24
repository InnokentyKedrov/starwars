import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { setCurrentPage } from '../../../../../../redux/slice';
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

  useEffect(() => {
    setDisableRight(state.currentPage === pages ? true : false);
    setDisableLeft(state.currentPage === 1 ? true : false);
  }, [state.currentPage, pages]);

  return (
    <section className={styles.pagination__container}>
      <ul className={styles.pagination__list}>
        <li className={styles.pagination__item}>
          <button
            className={
              disableLeft ? styles.pagination__buttonDisabled_left : styles.pagination__button_left
            }
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
            className={
              disableRight
                ? styles.pagination__buttonDisabled_right
                : styles.pagination__button_right
            }
            onClick={onClickRight}
          >
            {'>'}
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Pagination;
