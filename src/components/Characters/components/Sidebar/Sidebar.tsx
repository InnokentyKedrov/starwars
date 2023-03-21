import styles from './Sidebar.module.css';
import textData from '../../../../data/textData';
import { useAppSelector } from '../../../../redux/hooks';
import Dropdown from '../Dropdown/Dropdown';
import { genderSort } from '../../../const/const';

const Sidebar = () => {
  const state = useAppSelector((state) => state);
  const language = useAppSelector((state) => state.language);
  const count = state.sortResults.length;

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
      <ul className={styles.dropdown__list}>
        <Dropdown sort={genderSort} title={textData.sortLabel.gender[language]} />
        {/* <Dropdown sort={eyeColorSort} title={textData.sortLabel.eye_color[language]} /> */}
      </ul>
    </section>
  );
};

export default Sidebar;
