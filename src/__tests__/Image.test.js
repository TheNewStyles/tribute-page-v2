import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../components/Image';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has correct image text', () => {
  const wrapper = shallow(<Image />);
  const imageText = "Gates and his wife combined three family foundations and Gates donated stock valued at $5 billion to create the charitable Bill & Melinda Gates Foundation, which was identified by the Funds for NGOs company in 2013, as the world's wealthiest charitable foundation, with assets reportedly valued at more than $34.6 billion.";
  expect(wrapper).toHaveText(imageText);
});

it('renders without crashing', () => {
  const wrapper = shallow(<Image />);  
  expect(wrapper.find('img')).toMatchElement(
    <img id="image" className="flex-item" src="./images/BillMelinda1.jpg" alt="Bill and Melinda Gates in Africa"/>,
    { ignoreProps: true }
  );
});