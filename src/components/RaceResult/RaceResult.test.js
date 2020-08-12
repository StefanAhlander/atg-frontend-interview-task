import React from 'react';
import ReactDOM from 'react-dom';
import RaceResults from './RaceResults';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RaceResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});