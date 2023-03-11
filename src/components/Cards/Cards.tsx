import React, { ReactElement } from 'react';
import styles from './Cards.module.css';
import { setCurrentCard, setIsModal } from '../../redux/slice';
import { useAppDispatch } from '../../redux/hooks';
import { ResultsType } from '../../types/types';

const Cards: React.FC<{ card: ResultsType }> = ({ card }): ReactElement => {
  const dispatch = useAppDispatch();

  const showModal = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    dispatch(setCurrentCard(card));
    dispatch(setIsModal(true));
  };

  return (
    <li className={styles.cards__item} onClick={showModal}>
      <h3 className={styles.cards__item_title}>{card.name}</h3>
      <ul className={styles.heightMass__list}>
        {card.height !== 'unknown' && (
          <li className={styles.heightMass__item}>
            <span className={styles.heightMass__item_ring}>{card.height}</span>
            <span className={styles.heightMass__item_title}>height</span>
          </li>
        )}
        {card.mass !== 'unknown' && (
          <li className={styles.heightMass__item}>
            <span className={styles.heightMass__item_ring}>{card.mass}</span>
            <span className={styles.heightMass__item_title}>mass</span>
          </li>
        )}
      </ul>
      <ul className={styles.genderBirth__list}>
        {card.gender !== 'n/a' && (
          <li
            className={styles.genderBirth__item}
            style={
              card.gender === 'male'
                ? { backgroundColor: '#73d677' }
                : card.gender === 'female'
                ? { backgroundColor: '#c956ff' }
                : { backgroundColor: '#f5db13' }
            }
          >
            {card.gender}
          </li>
        )}
        {card.birth_year !== 'unknown' && (
          <li className={styles.genderBirth__item}>{card.birth_year}</li>
        )}
      </ul>
    </li>
  );
};

export default Cards;
