import { useEffect, useRef, useState } from 'react';
import textData from '../../../../data/textData';
import { useAppDispatch, useAppSelector, useOutsideClick } from '../../../../redux/hooks';
import { setCurrentPage, setSortResults } from '../../../../redux/slice';
import { ResultsType, SortType } from '../../../../types/types';
import styles from './Dropdown.module.css';

interface PropsType {
  sort: SortType[];
  title: string;
  drop: boolean;
  setDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const language = useAppSelector((state) => state.language);
  const [currentSort, setCurrentSort] = useState<string>(textData.all[language]);
  const [currentSortObject, setCurrentSortObject] = useState<SortType>(textData.all);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onClick = (el: SortType): void => {
    setCurrentSort(el[language]);
    setCurrentSortObject(el);
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
  }, [currentSort, state.results]);

  useOutsideClick([dropdownRef], () => props.setDrop(false));

  return (
    <div className={props.drop ? styles.dropdown_active : styles.dropdown} ref={dropdownRef}>
      <h3
        className={styles.dropdown__current}
        style={
          props.title === 'gender'
            ? { backgroundColor: '#ffdd78' }
            : props.title === 'skin'
            ? { backgroundColor: '#ffc107' }
            : props.title === 'hair'
            ? { backgroundColor: '#b99369' }
            : { backgroundColor: '#73d677' }
        }
      >
        {currentSort}
      </h3>
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
    </div>
  );
};

export default Dropdown;
