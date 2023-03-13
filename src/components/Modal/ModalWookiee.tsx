import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Modal.module.css';
import alien from '../../assets/images/alien.png';
import male from '../../assets/images/male.png';
import female from '../../assets/images/female.png';
import { setIsModal } from '../../redux/slice';

const ModalWookiee: React.FC = () => {
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
              state.currentCard.rrwowhwaworc === 'scraanwo'
                ? { backgroundImage: `url(${male})` }
                : state.currentCard.rrwowhwaworc === 'wwwoscraanwo'
                ? { backgroundImage: `url(${female})` }
                : { backgroundImage: `url(${alien})` }
            }
          >
            <ul className={styles.genderBirth__list}>
              {state.currentCard.rrwowhwaworc !== 'wh/ra' && (
                <li
                  className={styles.genderBirth__item}
                  style={
                    state.currentCard.rrwowhwaworc === 'scraanwo'
                      ? { backgroundColor: '#73d677' }
                      : state.currentCard.rrwowhwaworc === 'wwwoscraanwo'
                      ? { backgroundColor: '#c956ff' }
                      : { backgroundColor: '#f5db13' }
                  }
                >
                  {state.currentCard.rrwowhwaworc}
                </li>
              )}
              {state.currentCard.rhahrcaoac_roworarc !== 'huwhorwhooohwh' && (
                <li className={styles.genderBirth__item}>
                  {state.currentCard.rhahrcaoac_roworarc}
                </li>
              )}
            </ul>
          </div>
          <div className={styles.modal__right}>
            <h2 className={styles.modal__title}>{state.currentCard.whrascwo}</h2>
            <ul className={styles.modal__list}>
              {state.currentCard.worowo_oaooanoorc !== 'wh/ra' && (
                <li>worowo oaooanoorc: {state.currentCard.worowo_oaooanoorc}</li>
              )}
              {state.currentCard.corahwh_oaooanoorc !== 'wh/ra' && (
                <li>corahwh oaooanoorc: {state.currentCard.corahwh_oaooanoorc}</li>
              )}
              {state.currentCard.acraahrc_oaooanoorc !== 'wh/ra' && (
                <li>acraahrc oaooanoorc: {state.currentCard.acraahrc_oaooanoorc}</li>
              )}
            </ul>
            <ul className={styles.heightMass__list}>
              {state.currentCard.acwoahrracao !== 'huwhorwhooohwh' && (
                <li className={styles.heightMass__item}>
                  <span className={styles.heightMass__item_ring}>
                    {state.currentCard.acwoahrracao}
                  </span>
                  <span className={styles.heightMass__item_title}>acwoahrracao</span>
                </li>
              )}
              {state.currentCard.scracc !== 'huwhorwhooohwh' && (
                <li className={styles.heightMass__item}>
                  <span className={styles.heightMass__item_ring}>{state.currentCard.scracc}</span>
                  <span className={styles.heightMass__item_title}>scracc</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalWookiee;
