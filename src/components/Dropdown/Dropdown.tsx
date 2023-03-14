import { useEffect, useRef, useState } from 'react';
import textData from '../../data/textData';
import { useAppDispatch, useAppSelector, useOutsideClick } from '../../redux/hooks';
import { setCurrentPage, setSortResults } from '../../redux/slice';
import { ResultsType, SortType } from '../../types/types';
import styles from './Dropdown.module.css';

interface PropsType {
  sort: SortType[];
  title: string;
}

const Dropdown = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const language = useAppSelector((state) => state.language);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentSort, setCurrentSort] = useState<string>(textData.all[language]);
  const [currentSortObject, setCurrentSortObject] = useState<SortType>(textData.all);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openSort = (): void => {
    setIsOpen(!isOpen);
  };

  const onClick = (el: SortType): void => {
    setCurrentSort(el[language]);
    setCurrentSortObject(el);
    setIsOpen(!isOpen);
  };

  const sortData = (): void => {
    let currentArray: ResultsType[] = [];

    if (currentSort !== textData.all[language]) {
      state.results.map((el) => {
        type ObjectKey = keyof typeof el;
        if (el[props.title as ObjectKey] === currentSort) currentArray.push(el);
      });
    } else currentArray = Array.from(state.results);

    dispatch(setSortResults(currentArray));
    dispatch(setCurrentPage('1'));
  };

  useEffect(() => {
    setCurrentSort(currentSortObject[language]);
  }, [currentSortObject, language]);

  useEffect(() => {
    sortData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSort]);

  useOutsideClick([dropdownRef], () => setIsOpen(false));

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropdown__label_wrapper}>
        <h3 className={styles.dropdown__label}>{props.title}</h3>
        <button className={styles.dropdown__button} type="button" onClick={openSort}>
          {currentSort}
        </button>
      </div>
      {isOpen && (
        <ul className={styles.dropdown__list}>
          {props.sort.map((el) => {
            return el[language] !== currentSort ? (
              <li
                className={styles.dropdown__item}
                key={`${textData.all[language]}_${el[language]}`}
                onClick={() => onClick(el)}
              >
                {`${el[language]}`}
              </li>
            ) : (
              <li key={el[language]}></li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
