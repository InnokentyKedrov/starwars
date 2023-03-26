import { useNavigate } from 'react-router';
import styles from './NotFound.module.css';
import { useAppSelector } from '../../redux/hooks';
import textData from '../../data/textData';
import Header from '../Header/Header';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const language = useAppSelector((state) => state.language);
  const goBack = () => navigate(-1);

  return (
    <>
      <Header />
      <main className={styles.notfound__container}>
        <button className={styles.notfound__button} onClick={goBack}>
          {textData.notFound.button[language]}
        </button>
      </main>
    </>
  );
};

export default NotFound;
