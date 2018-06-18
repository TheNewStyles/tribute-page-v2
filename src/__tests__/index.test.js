import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../index';
import { shallow, mount} from 'enzyme';

describe('Index ', () => {
    it('renders without crashing', () => {
        expect(JSON.stringify(
          Object.assign({}, Index, { _reactInternalInstance: 'censored' })
        )).toMatchSnapshot();
      });   
  });