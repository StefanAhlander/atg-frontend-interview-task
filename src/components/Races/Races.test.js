import React from 'react';
import ReactDOM from 'react-dom';
import Races from './Races';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Races />, div);
  ReactDOM.unmountComponentAtNode(div);
});