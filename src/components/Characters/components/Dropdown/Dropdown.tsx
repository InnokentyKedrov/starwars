import { useRef } from 'react';
import textData from '../../../../data/textData';
import { useAppSelector, useOutsideClick } from '../../../../redux/hooks';
import { SortType } from '../../../../types/types';
import styles from './Dropdown.module.css';

interface PropsType {
  constSort: SortType[];
  title: string;
  drop: boolean;
  setDrop: React.Dispatch<React.SetStateAction<boolean>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = ({ constSort, title, drop, setDrop, sort, setSort }: PropsType) => {
  const language = useAppSelector((state) => state.language);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onClick = (el: SortType): void => {
    setSort(el[language]);
  };

  useOutsideClick([dropdownRef], () => setDrop(false));

  return (
    <div className={drop ? styles.dropdown_active : styles.dropdown} ref={dropdownRef}>
      <h3
        className={styles.dropdown__current}
        style={
          title === 'gender' || title === 'rrwowhwaworc'
            ? { backgroundColor: '#ffdd78' }
            : title === 'skin_color' || title === 'corahwh_oaooanoorc'
            ? { backgroundColor: '#ffc107' }
            : title === 'hair_color' || title === 'acraahrc_oaooanoorc'
            ? { backgroundColor: '#b99369' }
            : { backgroundColor: '#73d677' }
        }
      >
        {sort}
      </h3>
      <ul className={styles.dropdown__list}>
        {constSort.map((el) => {
          return el[language] !== sort ? (
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
