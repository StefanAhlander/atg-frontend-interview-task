import React from 'react';
import ReactDOM from 'react-dom';
import Race from './Race';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Race />, div);
  ReactDOM.unmountComponentAtNode(div);
});