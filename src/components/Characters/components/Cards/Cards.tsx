import React, { ReactElement } from 'react';
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
  const name = textData.card.name[language] as HeightType;

  const showModal = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    dispatch(setCurrentCard(card));
    dispatch(setIsModal(true));
  };

  return (
    <li className={styles.cards__item} onClick={showModal}>
      <h3 className={styles.cards__item_title}>{card[name]}</h3>
      <ul className={styles.heightMass__list}>
        {card[height] !== textData.error.unknown[language] && (
          <li className={styles.heightMass__item}>
            <span className={styles.heightMass__item_ring}>{card[height]}</span>
            <span className={styles.heightMass__item_title}>{height}</span>
          </li>
        )}
        {card[mass] !== textData.error.unknown[language] && (
          <li className={styles.heightMass__item}>
            <span className={styles.heightMass__item_ring}>{card[mass]}</span>
            <span className={styles.heightMass__item_title}>{mass}</span>
          </li>
        )}
      </ul>
      <ul className={styles.genderBirth__list}>
        {card[gender] !== textData.error.n_a[language] && (
          <li
            className={styles.genderBirth__item}
            style={
              card[gender] === textData.sort.gender.male[language]
                ? { backgroundColor: '#73d677' }
                : card[gender] === textData.sort.gender.female[language]
                ? { backgroundColor: '#c956ff' }
                : { backgroundColor: '#f5db13' }
            }
          >
            {card[gender]}
          </li>
        )}
        {card[birth_year] !== textData.error.unknown[language] && (
          <li className={styles.genderBirth__item}>{card[birth_year]}</li>
        )}
      </ul>
    </li>
  );
};

export default Cards;
