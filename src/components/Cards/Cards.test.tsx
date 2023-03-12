import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../../redux/store';
import Cards from './Cards';

const data = {
  birth_year: '19BBY',
  eye_color: 'blue',
  gender: 'male',
  hair_color: 'blond',
  height: '172',
  mass: '77',
  name: 'Luke Skywalker',
  skin_color: 'fair',
};

describe('Cards', () => {
  it('Cards render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="*" element={<Cards card={data} key={data.name} />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.queryByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('Check close modal after press closeButton or empty field', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="*" element={<Cards card={data} key={data.name} />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
    const cardField = document.querySelector('.cards__item');
    act(() => {
      if (cardField) {
        userEvent.click(cardField);
      }
    });
    expect(document.body.style.overflow === 'hidden');
  });
});
