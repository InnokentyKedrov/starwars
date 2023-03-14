import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Modal.module.css';
import alien from '../../assets/images/alien.png';
import male from '../../assets/images/male.png';
import female from '../../assets/images/female.png';
import { setIsModal } from '../../redux/slice';

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const close = () => dispatch(setIsModal(false));

  return (
    <section className={styles.modal__container}>
      <div className={styles.modal__container_opacity} onClick={close}></div>
      <div className={styles.modal__card}>
        <button className={styles.modal__close} onClick={close}></button>
        <div className={styles.modal__card_content}>
          <div
            className={styles.modal__left}
            style={
              state.currentCard.gender === 'male'
                ? { backgroundImage: `url(${male})` }
                : state.currentCard.gender === 'female'
                ? { backgroundImage: `url(${female})` }
                : { backgroundImage: `url(${alien})` }
            }
          >
            <ul className={styles.genderBirth__list}>
              {state.currentCard.gender !== 'n/a' && (
                <li
                  className={styles.genderBirth__item}
                  style={
                    state.currentCard.gender === 'male'
                      ? { backgroundColor: '#73d677' }
                      : state.currentCard.gender === 'female'
                      ? { backgroundColor: '#c956ff' }
                      : { backgroundColor: '#f5db13' }
                  }
                >
                  {state.currentCard.gender}
                </li>
              )}
              {state.currentCard.birth_year !== 'unknown' && (
                <li className={styles.genderBirth__item}>{state.currentCard.birth_year}</li>
              )}
            </ul>
          </div>
          <div className={styles.modal__right}>
            <h2 className={styles.modal__title}>{state.currentCard.name}</h2>
            <ul className={styles.modal__list}>
              {state.currentCard.eye_color !== 'n/a' &&
                state.currentCard.eye_color !== 'unknown' && (
                  <li>eye color: {state.currentCard.eye_color}</li>
                )}
              {state.currentCard.skin_color !== 'n/a' && (
                <li>skin color: {state.currentCard.skin_color}</li>
              )}
              {state.currentCard.hair_color !== 'n/a' && (
                <li>hair color: {state.currentCard.hair_color}</li>
              )}
            </ul>
            <ul className={styles.heightMass__list}>
              {state.currentCard.height !== 'unknown' && (
                <li className={styles.heightMass__item}>
                  <span className={styles.heightMass__item_ring}>{state.currentCard.height}</span>
                  <span className={styles.heightMass__item_title}>height</span>
                </li>
              )}
              {state.currentCard.mass !== 'unknown' && (
                <li className={styles.heightMass__item}>
                  <span className={styles.heightMass__item_ring}>{state.currentCard.mass}</span>
                  <span className={styles.heightMass__item_title}>mass</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
