import React, { ReactElement } from 'react';
import styles from './Cards.module.css';
import { setCurrentCard, setIsModal } from '../../redux/slice';
import { useAppDispatch } from '../../redux/hooks';
import { ResultsType } from '../../types/types';

const CardsWookie: React.FC<{ card: ResultsType }> = ({ card }): ReactElement => {
  const dispatch = useAppDispatch();

  const showModal = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    dispatch(setCurrentCard(card));
    dispatch(setIsModal(true));
  };

  return (
    <li className={styles.cards__item} onClick={showModal}>
      <h3 className={styles.cards__item_title}>{card.whrascwo}</h3>
      <ul className={styles.heightMass__list}>
        {card.acwoahrracao !== 'huwhorwhooohwh' && (
          <li className={styles.heightMass__item}>
            <span className={styles.heightMass__item_ring}>{card.acwoahrracao}</span>
            <span className={styles.heightMass__item_title}>acwoahrracao</span>
          </li>
        )}
        {card.scracc !== 'huwhorwhooohwh' && (
          <li className={styles.heightMass__item}>
            <span className={styles.heightMass__item_ring}>{card.scracc}</span>
            <span className={styles.heightMass__item_title}>scracc</span>
          </li>
        )}
      </ul>
      <ul className={styles.genderBirth__list}>
        {card.rrwowhwaworc !== 'wh/ra' && (
          <li
            className={styles.genderBirth__item}
            style={
              card.rrwowhwaworc === 'scraanwo'
                ? { backgroundColor: '#73d677' }
                : card.rrwowhwaworc === 'wwwoscraanwo'
                ? { backgroundColor: '#c956ff' }
                : { backgroundColor: '#f5db13' }
            }
          >
            {card.rrwowhwaworc}
          </li>
        )}
        {card.rhahrcaoac_roworarc !== 'huwhorwhooohwh' && (
          <li className={styles.genderBirth__item}>{card.rhahrcaoac_roworarc}</li>
        )}
      </ul>
    </li>
  );
};

export default CardsWookie;
