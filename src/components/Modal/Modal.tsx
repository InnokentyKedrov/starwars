import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Modal.module.css';
import alien from '../../assets/images/alien.png';
import male from '../../assets/images/male.png';
import female from '../../assets/images/female.png';
import { setIsModal } from '../../redux/slice';
import textData from '../../data/textData';

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentCard = useAppSelector((state) => state.currentCard);
  const language = useAppSelector((state) => state.language);

  type HeightType = keyof typeof currentCard;
  const height = textData.card.height[language] as HeightType;
  const mass = textData.card.mass[language] as HeightType;
  const gender = textData.card.gender[language] as HeightType;
  const birth_year = textData.card.birth_year[language] as HeightType;
  const name = textData.card.name[language] as HeightType;
  const eye_color = textData.card.eye_color[language] as HeightType;
  const skin_color = textData.card.skin_color[language] as HeightType;
  const hair_color = textData.card.hair_color[language] as HeightType;

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
              currentCard[gender] === textData.sort.gender.male[language]
                ? { backgroundImage: `url(${male})` }
                : currentCard[gender] === textData.sort.gender.female[language]
                ? { backgroundImage: `url(${female})` }
                : { backgroundImage: `url(${alien})` }
            }
          >
            <ul className={styles.genderBirth__list}>
              {currentCard[gender] !== textData.error.n_a[language] && (
                <li
                  className={styles.genderBirth__item}
                  style={
                    currentCard[gender] === textData.sort.gender.male[language]
                      ? { backgroundColor: '#73d677' }
                      : currentCard[gender] === textData.sort.gender.female[language]
                      ? { backgroundColor: '#c956ff' }
                      : { backgroundColor: '#f5db13' }
                  }
                >
                  {currentCard[gender]}
                </li>
              )}
              {currentCard[birth_year] !== textData.error.n_a[language] &&
                currentCard[birth_year] !== textData.error.unknown[language] && (
                  <li className={styles.genderBirth__item}>{currentCard[birth_year]}</li>
                )}
            </ul>
          </div>
          <div className={styles.modal__right}>
            <h2 className={styles.modal__title}>{currentCard[name]}</h2>
            <ul className={styles.modal__list}>
              {currentCard[eye_color] !== textData.error.n_a[language] &&
                currentCard[eye_color] !== textData.error.unknown[language] && (
                  <li>
                    {eye_color}: {currentCard[eye_color]}
                  </li>
                )}
              {currentCard[skin_color] !== textData.error.n_a[language] && (
                <li>
                  {skin_color}: {currentCard[skin_color]}
                </li>
              )}
              {currentCard[hair_color] !== textData.error.n_a[language] && (
                <li>
                  {hair_color}: {currentCard[hair_color]}
                </li>
              )}
            </ul>
            <ul className={styles.heightMass__list}>
              {currentCard[height] !== textData.error.unknown[language] && (
                <li className={styles.heightMass__item}>
                  <span className={styles.heightMass__item_ring}>{currentCard[height]}</span>
                  <span className={styles.heightMass__item_title}>{height}</span>
                </li>
              )}
              {currentCard[mass] !== textData.error.unknown[language] && (
                <li className={styles.heightMass__item}>
                  <span className={styles.heightMass__item_ring}>{currentCard[mass]}</span>
                  <span className={styles.heightMass__item_title}>{mass}</span>
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
