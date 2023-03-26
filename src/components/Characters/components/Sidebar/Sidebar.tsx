import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Sidebar.module.css';
import textData from '../../../../data/textData';
import { useAppSelector } from '../../../../redux/hooks';
import Dropdown from '../Dropdown/Dropdown';
import {
  constEyeColorSort,
  constGenderSort,
  constHairColorSort,
  constSkinColorSort,
} from '../../../const/const';
import { ResultsType } from '../../../../types/types';
import { setCurrentPage, setSortResults } from '../../../../redux/slice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useAppSelector((state) => state);
  const language = useAppSelector((state) => state.language);
  const [plusActive, setPlusActive] = useState<boolean>(false);

  const [genderDrop, setGenderDrop] = useState<boolean>(false);
  const [eyeDrop, setEyeDrop] = useState<boolean>(false);
  const [hairDrop, setHairDrop] = useState<boolean>(false);
  const [skinDrop, setSkinDrop] = useState<boolean>(false);

  const [genderSort, setGenderSort] = useState<string>(textData.all[language]);
  const [skinColorSort, setSkinColorSort] = useState<string>(textData.all[language]);
  const [hairColorSort, setHairColorSort] = useState<string>(textData.all[language]);
  const [eyeColorSort, setEyeColorSort] = useState<string>(textData.all[language]);

  const count = state.sortResults.length;

  const sortTitleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    switch (event.currentTarget.id) {
      case 'gender':
        setGenderDrop(!genderDrop);
        break;
      case 'eye':
        setEyeDrop(!eyeDrop);
        break;
      case 'hair':
        setHairDrop(!hairDrop);
        break;
      case 'skin':
        setSkinDrop(!skinDrop);
        break;

      default:
        break;
    }
  };

  const sortData = (): void => {
    let genderArray: ResultsType[] = [];
    let skinColorArray: ResultsType[] = [];
    let hairColorArray: ResultsType[] = [];
    let eyeColorArray: ResultsType[] = [];

    if (genderSort !== textData.all[language]) {
      state.results.map((el) => {
        type ObjectKey = keyof typeof el;
        if (el[textData.sortLabel.gender[language] as ObjectKey] === genderSort)
          genderArray.push(el);
      });
    } else genderArray = Array.from(state.results);

    if (skinColorSort !== textData.all[language]) {
      genderArray.map((el) => {
        type ObjectKey = keyof typeof el;
        if (el[textData.sortLabel.skin_color[language] as ObjectKey] === skinColorSort)
          skinColorArray.push(el);
      });
    } else skinColorArray = Array.from(genderArray);

    if (hairColorSort !== textData.all[language]) {
      skinColorArray.map((el) => {
        type ObjectKey = keyof typeof el;
        if (el[textData.sortLabel.hair_color[language] as ObjectKey] === hairColorSort)
          hairColorArray.push(el);
      });
    } else hairColorArray = Array.from(skinColorArray);

    if (eyeColorSort !== textData.all[language]) {
      hairColorArray.map((el) => {
        type ObjectKey = keyof typeof el;
        if (el[textData.sortLabel.eye_color[language] as ObjectKey] === eyeColorSort)
          eyeColorArray.push(el);
      });
    } else eyeColorArray = Array.from(hairColorArray);

    dispatch(setSortResults(eyeColorArray));
    dispatch(setCurrentPage('1'));
  };

  useEffect(() => {
    sortData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genderSort, skinColorSort, hairColorSort, eyeColorSort, state.results]);

  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebar__title}>
        <span className={styles.sidebar__title_number}>{count}</span>
        {count === 1 ? (
          <span className={styles.sidebar__title_text}>{textData.sidebar.person[language]}</span>
        ) : (
          <span className={styles.sidebar__title_text}>{textData.sidebar.persons[language]}</span>
        )}
      </div>
      <div className={styles.sidebar__sorter}>
        <div
          className={
            plusActive
              ? `${styles.sidebar__plus} ${styles.sidebar__plus_active}`
              : styles.sidebar__plus
          }
          onClick={() => setPlusActive(!plusActive)}
        >
          <span
            className={
              plusActive
                ? `${styles.sidebar__plus_span} ${styles.sidebar__plus_span_active}`
                : styles.sidebar__plus_span
            }
          ></span>
        </div>
        <ul className={styles.sidebar__sort_list}>
          <li
            className={
              plusActive
                ? styles.sidebar__sort_item_gender_active
                : styles.sidebar__sort_item_gender
            }
            id="gender"
            onClick={sortTitleClick}
          >
            <span className={styles.sort__item_gender_span}></span>
            <Dropdown
              constSort={constGenderSort}
              title={textData.sortLabel.gender[language]}
              drop={genderDrop}
              setDrop={setGenderDrop}
              sort={genderSort}
              setSort={setGenderSort}
            />
          </li>
          <li
            className={
              plusActive ? styles.sidebar__sort_item_eye_active : styles.sidebar__sort_item_eye
            }
            id="eye"
            onClick={sortTitleClick}
          >
            <span className={styles.sort__item_eye_span}></span>
            <Dropdown
              constSort={constEyeColorSort}
              title={textData.sortLabel.eye_color[language]}
              drop={eyeDrop}
              setDrop={setEyeDrop}
              sort={eyeColorSort}
              setSort={setEyeColorSort}
            />
          </li>
          <li
            className={
              plusActive ? styles.sidebar__sort_item_hair_active : styles.sidebar__sort_item_hair
            }
            id="hair"
            onClick={sortTitleClick}
          >
            <span className={styles.sort__item_hair_span}></span>
            <Dropdown
              constSort={constHairColorSort}
              title={textData.sortLabel.hair_color[language]}
              drop={hairDrop}
              setDrop={setHairDrop}
              sort={hairColorSort}
              setSort={setHairColorSort}
            />
          </li>
          <li
            className={
              plusActive ? styles.sidebar__sort_item_skin_active : styles.sidebar__sort_item_skin
            }
            id="skin"
            onClick={sortTitleClick}
          >
            <span className={styles.sort__item_skin_span}></span>
            <Dropdown
              constSort={constSkinColorSort}
              title={textData.sortLabel.skin_color[language]}
              drop={skinDrop}
              setDrop={setSkinDrop}
              sort={skinColorSort}
              setSort={setSkinColorSort}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
