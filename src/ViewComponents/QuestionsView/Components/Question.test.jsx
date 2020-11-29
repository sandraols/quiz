import React from 'react';
import { shallow } from 'enzyme';
import { Question } from './Question';

describe('IntroView', () => {
  let wrapper;
  const question = {
    question: "The question",
    alternatives: [
      {
        alternative: "one",
        isCorrect: true
      },
      {
        alternative: "two",
        isCorrect: false
      },
      {
        alternative: "three",
        isCorrect: false
      },
      {
        alternative: "four",
        isCorrect: false
      }
    ],
    gif: {
      gifLink: "a link",
      gifLinkEmbedded: "another link",
      title: "a title"
    }
  }
  const index = 1;
  const nextQuestionMock = jest.fn();
  const increaseScoreMock = jest.fn();
  const increaseNumOfIncorrectAnswersMock = jest.fn();
  const twoFalseAlternatives = ['false alternative one', 'false alternative two']

  beforeEach(() => {
    wrapper = shallow(
      <Question 
        question={question} 
        index={index}  
        nextQuestion={nextQuestionMock}
        increaseScore={increaseScoreMock} 
        increaseNumOfIncorrectAnswers={increaseNumOfIncorrectAnswersMock}
        twoFalseAlternatives={twoFalseAlternatives}
      />
    );
  });
  
  it('renders without crashing', () => {
    console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });

  describe('h1 element', () => {
    it('should render "Question" and which question it is currently at', () => {
      wrapper.find('h1').text().includes(`Question ${index}`);
    });
  });

  describe('.question__paragraph', () => {
    it('should render a question', () => {
      wrapper.find('.question__paragraph').text().includes(question.question);
    });
  });

  describe('alternative buttons', () => {
    it('should not have called nextQuestion by default', () => {
      expect(nextQuestionMock).not.toHaveBeenCalled();
    });
    describe('when a correct alternative button is clicked', () => {
      it('should call nextQuestion', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(nextQuestionMock).toHaveBeenCalledTimes(1);
      });
      it('should call increaseScore', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(increaseScoreMock).toHaveBeenCalledTimes(1);
      });
    });
    describe('when an incorrect alternative button is clicked', () => {
      it('should call nextQuestion', () => {
        wrapper.find('button').at(1).simulate('click');
        expect(nextQuestionMock).toHaveBeenCalledTimes(1);
      });
      it('should call increaseNumOfIncorrectAnswers', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(increaseNumOfIncorrectAnswersMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});