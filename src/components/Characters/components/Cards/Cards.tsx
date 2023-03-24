import React, { ReactElement, useEffect } from 'react';
import styles from './Cards.module.css';
import { setCurrentCard, setIsModal } from '../../../../redux/slice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { ResultsType } from '../../../../types/types';
import textData from '../../../../data/textData';

const Cards: React.FC<{ card: ResultsType }> = ({ card }): ReactElement => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language);

  type HeightType = keyof typeof card;
  const height = textData.card.height[language] as HeightType;
  const mass = textData.card.mass[language] as HeightType;
  const gender = textData.card.gender[language] as HeightType;
  const birth_year = textData.card.birth_year[language] as HeightType;
  const year = textData.modal.year[language] as HeightType;
  const name = textData.card.name[language] as HeightType;

  const imageUrl = () => {
    if (language === 'en') return card.name;
    else {
      switch (card.whrascwo) {
        case 'Lhuorwo Sorroohraanorworc':
          return 'Luke Skywalker';
        case 'Drarcaoac Vrawaworc':
          return 'Darth Vader';
        case 'Lwoahra Orcrrrawhra':
          return 'Leia Organa';
        case 'Oohwowh Lrarcc':
          return 'Owen Lars';

        default:
          break;
      }
    }
  };

  const showModal = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    dispatch(setCurrentCard(card));
    dispatch(setIsModal(true));
  };

  useEffect(() => {
    console.log('card.name: ', card.name);
    console.log(imageUrl());
  });

  return (
    <li className={styles.cards__item} onClick={showModal}>
      <h3 className={styles.cards__item_title}>{card[name]}</h3>
      <div className={styles.cards__content_wrapper}>
        <ul className={styles.cards__content_list_title}>
          {card[height] !== textData.error.unknown[language] && (
            <li className={styles.cards__content_item_title}>
              <span className={styles.heightMass__item_title}>{height}</span>
            </li>
          )}
          {card[mass] !== textData.error.unknown[language] && (
            <li className={styles.cards__content_item_title}>
              <span className={styles.heightMass__item_title}>{mass}</span>
            </li>
          )}
          {card[gender] !== textData.error.n_a[language] && (
            <li className={styles.cards__content_item_title}>{gender}</li>
          )}
          {card[birth_year] !== textData.error.unknown[language] && (
            <li className={styles.cards__content_item_title}>{year}</li>
          )}
        </ul>
        <ul className={styles.cards__content_list_data}>
          {card[height] !== textData.error.unknown[language] && (
            <li className={styles.cards__content_item_data}>{card[height]}</li>
          )}
          {card[mass] !== textData.error.unknown[language] && (
            <li className={styles.cards__content_item_data}>{card[mass]}</li>
          )}
          {card[gender] !== textData.error.n_a[language] && (
            <li className={styles.cards__content_item_data}>{card[gender]}</li>
          )}
          {card[birth_year] !== textData.error.unknown[language] && (
            <li className={styles.cards__content_item_data}>{card[birth_year]}</li>
          )}
        </ul>
        <div
          className={styles.cards__item_image}
          style={{ backgroundImage: `url('/avatars/${imageUrl()}.jpg')` }}
        />
      </div>
    </li>
  );
};

export default Cards;
