import { useState } from 'react';
import styles from './Sidebar.module.css';
import textData from '../../../../data/textData';
import { useAppSelector } from '../../../../redux/hooks';
import Dropdown from '../Dropdown/Dropdown';
import { eyeColorSort, genderSort } from '../../../const/const';

const Sidebar = () => {
  const state = useAppSelector((state) => state);
  const language = useAppSelector((state) => state.language);
  const [plusActive, setPlusActive] = useState<boolean>(false);
  const [genderDrop, setGenderDrop] = useState<boolean>(false);
  const [eyeDrop, setEyeDrop] = useState<boolean>(false);
  const [hairDrop, setHairDrop] = useState<boolean>(false);
  const [skinDrop, setSkinDrop] = useState<boolean>(false);
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
              sort={genderSort}
              title={textData.sortLabel.gender[language]}
              drop={genderDrop}
              setDrop={setGenderDrop}
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
              sort={eyeColorSort}
              title={textData.sortLabel.eye_color[language]}
              drop={eyeDrop}
              setDrop={setEyeDrop}
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
          </li>
          <li
            className={
              plusActive ? styles.sidebar__sort_item_skin_active : styles.sidebar__sort_item_skin
            }
            id="skin"
            onClick={sortTitleClick}
          >
            <span className={styles.sort__item_skin_span}></span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
