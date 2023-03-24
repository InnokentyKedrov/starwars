import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Modal.module.css';
import { setIsModal } from '../../redux/slice';
import textData from '../../data/textData';

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentCard = useAppSelector((state) => state.currentCard);
  const language = useAppSelector((state) => state.language);

  type HeightType = keyof typeof currentCard;
  const name = textData.card.name[language] as HeightType;
  const height = textData.card.height[language] as HeightType;
  const mass = textData.card.mass[language] as HeightType;
  const gender = textData.card.gender[language] as HeightType;
  const birth_year = textData.card.birth_year[language] as HeightType;
  const eye_color = textData.card.eye_color[language] as HeightType;
  const skin_color = textData.card.skin_color[language] as HeightType;
  const hair_color = textData.card.hair_color[language] as HeightType;
  const year = textData.modal.year[language] as HeightType;
  const eye = textData.modal.eye[language] as HeightType;
  const skin = textData.modal.skin[language] as HeightType;
  const hair = textData.modal.hair[language] as HeightType;

  const close = () => dispatch(setIsModal(false));

  return (
    <section className={styles.modal__container}>
      <div className={styles.modal__container_opacity} onClick={close} />
      <div
        className={styles.modal__card}
        style={{ backgroundImage: `url('/avatars/${currentCard.name}.jpg')` }}
      >
        <h3 className={styles.modal__card_title}>{currentCard[name]}</h3>
        <button className={styles.modal__close} onClick={close}>
          +
        </button>
        <div className={styles.modal__card_content_wrapper}>
          <ul className={styles.modal__card_content_list_title}>
            {currentCard[height] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_title}>
                <span className={styles.heightMass__title}>{height}</span>
              </li>
            )}
            {currentCard[mass] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_title}>
                <span className={styles.heightMass__title}>{mass}</span>
              </li>
            )}
            {currentCard[gender] !== textData.error.n_a[language] && (
              <li className={styles.modal__card_content_title}>{gender}</li>
            )}
            {currentCard[birth_year] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_title}>{year}</li>
            )}
            {currentCard[eye_color] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_title}>{eye}</li>
            )}
            {currentCard[skin_color] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_title}>{skin}</li>
            )}
            {currentCard[hair_color] !== textData.error.unknown[language] &&
              currentCard[hair_color] !== textData.error.n_a[language] && (
                <li className={styles.modal__card_content_title}>{hair}</li>
              )}
          </ul>
          <ul className={styles.modal__card_content_list_data}>
            {currentCard[height] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_data}>{currentCard[height]}</li>
            )}
            {currentCard[mass] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_data}>{currentCard[mass]}</li>
            )}
            {currentCard[gender] !== textData.error.n_a[language] && (
              <li className={styles.modal__card_content_data}>{currentCard[gender]}</li>
            )}
            {currentCard[birth_year] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_data}>{currentCard[birth_year]}</li>
            )}
            {currentCard[eye_color] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_data}>{currentCard[eye_color]}</li>
            )}
            {currentCard[skin_color] !== textData.error.unknown[language] && (
              <li className={styles.modal__card_content_data}>{currentCard[skin_color]}</li>
            )}
            {currentCard[hair_color] !== textData.error.unknown[language] &&
              currentCard[hair_color] !== textData.error.n_a[language] && (
                <li className={styles.modal__card_content_data}>{currentCard[hair_color]}</li>
              )}
          </ul>
        </div>
      </div>
      {/* 
      <div className={styles.modal__container_opacity} onClick={close}></div>
      <div className={styles.modal__card}>
        <button className={styles.modal__close} onClick={close}></button>
        <div className={styles.modal__card_content}>
          <div
            className={styles.modal__left}
            style={
              currentcurrentCard[gender] === textData.sort.gender.male[language]
                ? { backgroundImage: `url(${male})` }
                : currentcurrentCard[gender] === textData.sort.gender.female[language]
                ? { backgroundImage: `url(${female})` }
                : { backgroundImage: `url(${alien})` }
            }
          >
            <ul className={styles.genderBirth__list}>
              {currentcurrentCard[gender] !== textData.error.n_a[language] && (
                <li
                  className={styles.genderBirth_}
                  style={
                    currentcurrentCard[gender] === textData.sort.gender.male[language]
                      ? { backgroundColor: '#73d677' }
                      : currentcurrentCard[gender] === textData.sort.gender.female[language]
                      ? { backgroundColor: '#c956ff' }
                      : { backgroundColor: '#f5db13' }
                  }
                >
                  {currentcurrentCard[gender]}
                </li>
              )}
              {currentcurrentCard[birth_year] !== textData.error.n_a[language] &&
                currentcurrentCard[birth_year] !== textData.error.unknown[language] && (
                  <li className={styles.genderBirth_}>{currentcurrentCard[birth_year]}</li>
                )}
            </ul>
          </div>
          <div className={styles.modal__right}>
            <h2 className={styles.modal__title}>{currentcurrentCard[name]}</h2>
            <ul className={styles.modal__list}>
              {currentcurrentCard[eye_color] !== textData.error.n_a[language] &&
                currentcurrentCard[eye_color] !== textData.error.unknown[language] && (
                  <li>
                    {eye_color}: {currentcurrentCard[eye_color]}
                  </li>
                )}
              {currentcurrentCard[skin_color] !== textData.error.n_a[language] && (
                <li>
                  {skin_color}: {currentcurrentCard[skin_color]}
                </li>
              )}
              {currentcurrentCard[hair_color] !== textData.error.n_a[language] && (
                <li>
                  {hair_color}: {currentcurrentCard[hair_color]}
                </li>
              )}
            </ul>
            <ul className={styles.heightMass__list}>
              {currentcurrentCard[height] !== textData.error.unknown[language] && (
                <li className={styles.heightMass_}>
                  <span className={styles.heightMass__ring}>{currentcurrentCard[height]}</span>
                  <span className={styles.heightMass__title}>{height}</span>
                </li>
              )}
              {currentcurrentCard[mass] !== textData.error.unknown[language] && (
                <li className={styles.heightMass_}>
                  <span className={styles.heightMass__ring}>{currentcurrentCard[mass]}</span>
                  <span className={styles.heightMass__title}>{mass}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Modal;
