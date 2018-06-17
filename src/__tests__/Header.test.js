import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('<Header />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders h1 title', () => {
    const header = shallow(<Header />);
    const title = <h1 id="title" className="flex-item">Bill Gates</h1>;
    expect(header).toContainReact(title);
  });

  if('renders sub title', () => {
    const header = shallow(<Header />);
    const subTitle = <div className="flex-item"><p> Business Leader, Entrepreneur, Philanthropist</p></div>;
    expect(header).toContainReact(subTitle);
  });
  
});

