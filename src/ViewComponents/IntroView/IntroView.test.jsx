import React from 'react';
import { shallow } from 'enzyme';
import { IntroView } from './IntroView';

describe('IntroView', () => {
  let wrapper;
  const nextViewMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<IntroView nextView={nextViewMock}/>);
  });
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Start button', () => {
    it('should not have called nextView by default', () => {
      expect(nextViewMock).not.toHaveBeenCalled();
    });
    describe('when start button is clicked', () => {
      it('should call nextView', () => {
        wrapper.find('.intro-view__button').simulate('click');
        expect(nextViewMock).toHaveBeenCalledTimes(1);
      });
    })
  });


});