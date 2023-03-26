import { ResultsType } from '../../types/types';

export const constGenderSort = [
  {
    wookiee: 'raanan',
    en: 'all',
  },
  {
    wookiee: 'scraanwo',
    en: 'male',
  },
  {
    wookiee: 'wwwoscraanwo',
    en: 'female',
  },
  {
    wookiee: 'acworcscraakacrcoowaahaowo',
    en: 'hermaphrodite',
  },
  {
    wookiee: 'whoowhwo',
    en: 'none',
  },
];

export const constEyeColorSort = [
  {
    wookiee: 'raanan',
    en: 'all',
  },
  {
    wookiee: 'rhrcooohwh',
    en: 'brown',
  },
  {
    wookiee: 'rhanhuwo',
    en: 'blue',
  },
  {
    wookiee: 'rcwowa',
    en: 'red',
  },
  {
    wookiee: 'rhanhuwo-rrrcraro',
    en: 'blue-gray',
  },
  {
    wookiee: 'rhanraoaor',
    en: 'black',
  },
  {
    wookiee: 'oorcrawhrrwo',
    en: 'orange',
  },
  {
    wookiee: 'acraufwoan',
    en: 'hazel',
  },
  {
    wookiee: 'akahwhor',
    en: 'pink',
  },
  {
    wookiee: 'rcwowa, rhanhuwo',
    en: 'red, blue',
  },
  {
    wookiee: 'rrooanwa',
    en: 'gold',
  },
  {
    wookiee: 'rrrcwowowh, rowoananoooh',
    en: 'green, yellow',
  },
  {
    wookiee: 'ohacahaowo',
    en: 'white',
  },
  {
    wookiee: 'rowoananoooh',
    en: 'yellow',
  },
];

export const constSkinColorSort = [
  {
    wookiee: 'raanan',
    en: 'all',
  },
  {
    wookiee: 'wwraahrc',
    en: 'fair',
  },
  {
    wookiee: 'rrooanwa',
    en: 'gold',
  },
  {
    wookiee: 'anahrracao',
    en: 'light',
  },
  {
    wookiee: 'ohacahaowo, rhanhuwo',
    en: 'white, blue',
  },
  {
    wookiee: 'ohacahaowo',
    en: 'white',
  },
  {
    wookiee: 'ohacahaowo, rcwowa',
    en: 'white, red',
  },
  {
    wookiee: 'rrrcwowowh',
    en: 'green',
  },
  {
    wookiee: 'rrrcwowowh-aorawh, rhrcooohwh',
    en: 'green-tan, brown',
  },
  {
    wookiee: 'akraanwo',
    en: 'pale',
  },
  {
    wookiee: 'scwoaoraan',
    en: 'metal',
  },
  {
    wookiee: 'wararcor',
    en: 'dark',
  },
  {
    wookiee: 'rhrcooohwh scooaoaoanwo',
    en: 'brown mottle',
  },
  {
    wookiee: 'rhrcooohwh',
    en: 'brown',
  },
  {
    wookiee: 'rrrcworo',
    en: 'grey',
  },
  {
    wookiee: 'scooaoaoanwowa rrrcwowowh',
    en: 'mottled green',
  },
  {
    wookiee: 'oorcrawhrrwo',
    en: 'orange',
  },
  {
    wookiee: 'rhanhuwo, rrrcworo',
    en: 'blue, grey',
  },
  {
    wookiee: 'rrrcworo, rcwowa',
    en: 'grey, red',
  },
  {
    wookiee: 'rcwowa',
    en: 'red',
  },
  {
    wookiee: 'rhanhuwo',
    en: 'blue',
  },
  {
    wookiee: 'rrrcworo, rhanhuwo',
    en: 'grey, blue',
  },
  {
    wookiee: 'rowoananoooh',
    en: 'yellow',
  },
  {
    wookiee: 'aorawh',
    en: 'tan',
  },
  {
    wookiee: 'wwraahrc, rrrcwowowh, rowoananoooh',
    en: 'fair, green, yellow',
  },
  {
    wookiee: 'cahanhoworc, rcwowa',
    en: 'silver, red',
  },
  {
    wookiee: 'rrrcwowowh, rrrcworo',
    en: 'green, grey',
  },
  {
    wookiee: 'rcwowa, rhanhuwo, ohacahaowo',
    en: 'red, blue, white',
  },
  {
    wookiee: 'rhrcooohwh, ohacahaowo',
    en: 'brown, white',
  },
];

export const constHairColorSort = [
  {
    wookiee: 'raanan',
    en: 'all',
  },
  {
    wookiee: 'rhanoowhwa',
    en: 'blond',
  },
  {
    wookiee: 'rhanoowhwawo',
    en: 'blonde',
  },
  {
    wookiee: 'whoowhwo',
    en: 'none',
  },
  {
    wookiee: 'rhrcooohwh',
    en: 'brown',
  },
  {
    wookiee: 'rhrcooohwh, rrrcworo',
    en: 'brown, grey',
  },
  {
    wookiee: 'rhanraoaor',
    en: 'black',
  },
  {
    wookiee: 'acraufwoan',
    en: 'auburn',
  },
  {
    wookiee: 'rahurhhurcwh, ohacahaowo',
    en: 'auburn, white',
  },
  {
    wookiee: 'rahurhhurcwh, rrrcworo',
    en: 'auburn, grey',
  },
  {
    wookiee: 'rrrcworo',
    en: 'grey',
  },
  {
    wookiee: 'ohacahaowo',
    en: 'white',
  },
];

export const imageUrl = (language: string, card: ResultsType) => {
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
      case 'Bworchu Wacahaowochuwh anrarcc':
        return 'Beru Whitesun lars';
      case 'Orhah-Wrawh Kwowhoorhah':
        return 'Obi-Wan Kenobi';
      case 'Awhraorahwh Sorroohraanorworc':
        return 'Anakin Skywalker';
      case 'Hrawh Sooanoo':
        return 'Han Solo';
      case 'Jrarhrhra Dwocahanahshahoa Tahhurcwo':
        return 'Jabba Desilijic Tiure';
      case 'Yoowara':
        return 'Yoda';

      default:
        return card.whrascwo;
    }
  }
};
