import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentPage, setSortResults } from '../../redux/slice';
import { ResultsType } from '../../types/types';
import styles from './Sort.module.css';

const Sort = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const [eye, setEye] = useState<string>('');
  const [skin, setSkin] = useState<string>('');
  const [hair, setHair] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const eyeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEye(event.target.value);
  };

  const skinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSkin(event.target.value);
  };

  const hairChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHair(event.target.value);
  };
  const genderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const sortData = () => {
    let eyeArray: ResultsType[] = [];
    let skinArray: ResultsType[] = [];
    let hairArray: ResultsType[] = [];
    let genderArray: ResultsType[] = [];
    console.log('eye', eye);
    console.log('skin', skin);
    console.log('hair', hair);
    console.log('gender', gender);

    if (eye !== 'all') {
      state.results.map((el) => {
        if (el.eye_color === eye) eyeArray.push(el);
      });
    } else eyeArray = Array.from(state.results);
    console.log('eyeArray: ', eyeArray);
    if (skin !== 'all') {
      eyeArray.map((el) => {
        if (el.skin_color === skin) skinArray.push(el);
      });
    } else skinArray = Array.from(eyeArray);
    console.log('skinArray: ', skinArray);
    if (hair !== 'all') {
      skinArray.map((el) => {
        if (el.hair_color === hair) hairArray.push(el);
      });
    } else hairArray = Array.from(skinArray);
    console.log('hairArray: ', hairArray);
    if (gender !== 'all') {
      hairArray.map((el) => {
        if (el.gender === gender) genderArray.push(el);
      });
    } else genderArray = Array.from(hairArray);
    console.log('genderArray: ', genderArray);

    dispatch(setSortResults(genderArray));
    dispatch(setCurrentPage('1'));
  };

  useEffect(() => {
    console.log(gender);
    sortData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eye, skin, hair, gender]);

  return (
    <form className={styles.sort__form}>
      <label className={styles.sort__label}>
        color eye
        <select className={styles.sort__select} onChange={eyeChange}>
          <option className={styles.sort__select_option} value="all">
            All
          </option>
          <option className={styles.sort__select_option} value="brown">
            Brown
          </option>
          <option className={styles.sort__select_option} value="blue">
            Blue
          </option>
          <option className={styles.sort__select_option} value="red">
            Red
          </option>
          <option className={styles.sort__select_option} value="blue-gray">
            Blue-gray
          </option>
          <option className={styles.sort__select_option} value="black">
            Black
          </option>
          <option className={styles.sort__select_option} value="orange">
            Orange
          </option>
          <option className={styles.sort__select_option} value="hazel">
            Hazel
          </option>
          <option className={styles.sort__select_option} value="pink">
            Pink
          </option>
          <option className={styles.sort__select_option} value="red, blue">
            Red, blue
          </option>
          <option className={styles.sort__select_option} value="gold">
            Gold
          </option>
          <option className={styles.sort__select_option} value="green, yellow">
            Green, yellow
          </option>
          <option className={styles.sort__select_option} value="white">
            White
          </option>
          <option className={styles.sort__select_option} value="yellow">
            Yellow
          </option>
        </select>
      </label>
      <label className={styles.sort__label}>
        color skin
        <select className={styles.sort__select} onChange={skinChange}>
          <option className={styles.sort__select_option} value="all">
            All
          </option>
          <option className={styles.sort__select_option} value="fair">
            Fair
          </option>
          <option className={styles.sort__select_option} value="gold">
            Gold
          </option>
          <option className={styles.sort__select_option} value="light">
            Light
          </option>
          <option className={styles.sort__select_option} value="white&blue">
            White, blue
          </option>
          <option className={styles.sort__select_option} value="white">
            White
          </option>
          <option className={styles.sort__select_option} value="white, red">
            White, red
          </option>
          <option className={styles.sort__select_option} value="green">
            Green
          </option>
          <option className={styles.sort__select_option} value="green-tan, brown">
            Green-tan, brown
          </option>
          <option className={styles.sort__select_option} value="pale">
            Pale
          </option>
          <option className={styles.sort__select_option} value="metal">
            Metal
          </option>
          <option className={styles.sort__select_option} value="dark">
            Dark
          </option>
          <option className={styles.sort__select_option} value="brown mottle">
            Brown mottle
          </option>
          <option className={styles.sort__select_option} value="brown">
            Brown
          </option>
          <option className={styles.sort__select_option} value="grey">
            Grey
          </option>
          <option className={styles.sort__select_option} value="mottled green">
            Mottled green
          </option>
          <option className={styles.sort__select_option} value="orange">
            Orange
          </option>
          <option className={styles.sort__select_option} value="blue, grey">
            Blue, grey
          </option>
          <option className={styles.sort__select_option} value="grey, red">
            Grey, red
          </option>
          <option className={styles.sort__select_option} value="red">
            Red
          </option>
          <option className={styles.sort__select_option} value="blue">
            Blue
          </option>
          <option className={styles.sort__select_option} value="grey, blue">
            Grey, blue
          </option>
          <option className={styles.sort__select_option} value="yellow">
            Yellow
          </option>
          <option className={styles.sort__select_option} value="tan">
            Tan
          </option>
          <option className={styles.sort__select_option} value="fair, green, yellow">
            Fair, green, yellow
          </option>
          <option className={styles.sort__select_option} value="silver, red">
            Silver, red
          </option>
          <option className={styles.sort__select_option} value="green, grey">
            Green, grey
          </option>
          <option className={styles.sort__select_option} value="red, blue, white">
            Red, blue, white
          </option>
          <option className={styles.sort__select_option} value="brown, white">
            Brown, white
          </option>
        </select>
      </label>
      <label className={styles.sort__label}>
        color hair
        <select className={styles.sort__select} onChange={hairChange}>
          <option className={styles.sort__select_option} value="all">
            All
          </option>
          <option className={styles.sort__select_option} value="blond">
            Blond
          </option>
          <option className={styles.sort__select_option} value="blonde">
            Blonde
          </option>
          <option className={styles.sort__select_option} value="none">
            None
          </option>
          <option className={styles.sort__select_option} value="brown">
            Brown
          </option>
          <option className={styles.sort__select_option} value="brown, grey">
            Brown, grey
          </option>
          <option className={styles.sort__select_option} value="black">
            Black
          </option>
          <option className={styles.sort__select_option} value="auburn">
            Auburn
          </option>
          <option className={styles.sort__select_option} value="auburn, white">
            Auburn, white
          </option>
          <option className={styles.sort__select_option} value="auburn, grey">
            Auburn, grey
          </option>
          <option className={styles.sort__select_option} value="grey">
            Grey
          </option>
          <option className={styles.sort__select_option} value="white">
            White
          </option>
        </select>
      </label>
      <label className={styles.sort__label}>
        gender
        <select className={styles.sort__select} onChange={genderChange}>
          <option className={styles.sort__select_option} value="all">
            All
          </option>
          <option className={styles.sort__select_option} value="male">
            Male
          </option>
          <option className={styles.sort__select_option} value="female">
            Female
          </option>
          <option className={styles.sort__select_option} value="hermaphrodite">
            Hermaphrodite
          </option>
          <option className={styles.sort__select_option} value="none">
            None
          </option>
        </select>
      </label>
    </form>
  );
};

export default Sort;
