import React from 'react';
import ReactDOM from 'react-dom';
import TributeInfo from '../components/TributeInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TributeInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});