import React from 'react';
import ReactDOM from 'react-dom';
import TributeLink from '../components/TributeLink';
import { shallow, mount} from 'enzyme';

describe('<TributeLink />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TributeLink />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Article element exists', () => {
    const wrapper = mount(<TributeLink />);
    expect(wrapper.find('article')).toExist();
  });

  it('Click on link', () => {
    const wrapper = mount(<TributeLink />);
    wrapper.find('a').simulate('click');
  });
  
});