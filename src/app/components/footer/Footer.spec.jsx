/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.Footer').length).toBe(1);
  });
});
