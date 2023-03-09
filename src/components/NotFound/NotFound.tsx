import { useNavigate } from 'react-router';
import styles from './NotFound.module.css';
import death_star from '../../assets/images/death_star.png';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <main className={styles.notfound__container}>
      <div className={styles.notfound__title_wrapper}>
        <h1 className={styles.notfound__title}>404</h1>
        <img className={styles.notfound__image} src={death_star} alt="Death star." />
      </div>
      <button className={styles.notfound__button} onClick={goBack}>
        Return
      </button>
    </main>
  );
};

export default NotFound;
