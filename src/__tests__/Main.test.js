import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main';
import Header from '../components/Header';
import TributeInfo from '../components/TributeInfo';
import TributeLink from '../components/TributeLink';
import Image from '../components/Image';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders all components', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toContainReact(          
  <div className="background-green" id="main">
    <Header/>
    <section>            
      <Image/>
      <TributeInfo/>
      <TributeLink/>
    </section>
  </div>);
});