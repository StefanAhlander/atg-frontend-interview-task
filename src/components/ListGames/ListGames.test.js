import React from 'react';
import ReactDOM from 'react-dom';
import ListGames from './ListGames';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListGames />, div);
  ReactDOM.unmountComponentAtNode(div);
});