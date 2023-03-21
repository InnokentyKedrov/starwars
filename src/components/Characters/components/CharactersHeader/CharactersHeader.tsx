import styles from './CharactersHeader.module.css';
import textData from '../../../../data/textData';
import { useAppSelector } from '../../../../redux/hooks';
import Pagination from '../Pagination/Pagination';

const CharactersHeader = () => {
  const language = useAppSelector((state) => state.language);

  return (
    <section className={styles.charactersHeader}>
      {/* <span className={styles.characters__language}>
        {textData.characters.language[language]}: {state.language}
      </span> */}

      <div className={styles.charactersHeader__title}>
        <span className={styles.charactersHeader__title_bold}>
          {textData.charactersHeader.choose[language]}{' '}
        </span>
        <span className={styles.charactersHeader__title_normal}>
          {textData.charactersHeader.favorite[language]}
        </span>
      </div>
      <Pagination />
    </section>
  );
};

export default CharactersHeader;
