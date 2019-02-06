import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App.js';

describe('App', () => {
  const app = shallow(<App />);

  it('renders the title', () => {
    expect(app.find('h1').exists()).toBe(true);
  });
});