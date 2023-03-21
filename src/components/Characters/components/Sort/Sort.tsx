import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setCurrentPage, setSortResults } from '../../../../redux/slice';
import { ResultsType } from '../../../../types/types';
import styles from './Sort.module.css';
import textData from '../../../../data/textData';

const Sort = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const language = useAppSelector((state) => state.language);

  const [gender, setGender] = useState<string>(textData.sort.gender.all[language]);

  const genderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const sortData = () => {
    let genderArray: ResultsType[] = [];

    if (language === 'en') {
      if (gender !== textData.sort.gender.all[language]) {
        state.results.map((el) => {
          if (el.gender === gender) genderArray.push(el);
        });
      } else genderArray = Array.from(state.results);
    } else {
      if (gender !== textData.sort.gender.all[language]) {
        state.results.map((el) => {
          if (el.rrwowhwaworc === gender) genderArray.push(el);
        });
      } else genderArray = Array.from(state.results);
    }

    dispatch(setSortResults(genderArray));
    dispatch(setCurrentPage('1'));
  };

  useEffect(() => {
    sortData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender]);

  return (
    <form className={styles.sort__form}>
      <label className={styles.sort__label}>
        {textData.sortLabel.gender[language]}
        <select className={styles.sort__select} onChange={genderChange}>
          <option className={styles.sort__select_option} value={textData.sort.gender.all[language]}>
            {textData.sort.gender.all[language]}
          </option>
          <option
            className={styles.sort__select_option}
            value={textData.sort.gender.male[language]}
          >
            {textData.sort.gender.male[language]}
          </option>
          <option
            className={styles.sort__select_option}
            value={textData.sort.gender.female[language]}
          >
            {textData.sort.gender.female[language]}
          </option>
          <option
            className={styles.sort__select_option}
            value={textData.sort.gender.hermaphrodite[language]}
          >
            {textData.sort.gender.hermaphrodite[language]}
          </option>
          <option
            className={styles.sort__select_option}
            value={textData.sort.gender.none[language]}
          >
            {textData.sort.gender.none[language]}
          </option>
        </select>
      </label>
    </form>
  );
};

export default Sort;
