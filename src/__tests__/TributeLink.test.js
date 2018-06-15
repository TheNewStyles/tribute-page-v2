import React from 'react';
import ReactDOM from 'react-dom';
import TributeLink from '../components/TributeLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TributeLink />, div);
  ReactDOM.unmountComponentAtNode(div);
});