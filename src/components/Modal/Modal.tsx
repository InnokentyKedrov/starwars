import { useAppSelector } from '../../redux/hooks';
import styles from './Modal.module.css';
import textData from '../../data/textData';
import { imageUrl } from '../const/const';

type PropsType = {
  setIsModal: (args: boolean) => void;
};

const Modal = ({ setIsModal }: PropsType) => {
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

  const close = () => setIsModal(false);

  return (
    <section className={styles.modal__container}>
      <div className={styles.modal__container_opacity} onClick={close} />
      <div
        className={styles.modal__card}
        style={{ backgroundImage: `url('/avatars/${imageUrl(language, currentCard)}.jpg')` }}
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
    </section>
  );
};

export default Modal;
