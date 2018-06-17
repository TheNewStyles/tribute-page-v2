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

  it('find title', () => {
    const wrapper = shallow(<Header />);
    const title = <h1 id="title" className="flex-item">Bill Gates</h1>;
    expect(wrapper).toContainReact(title);
  });

});
