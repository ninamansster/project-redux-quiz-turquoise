import React from 'react'
import { useSelector } from 'react-redux'
import { ProgressBarContainer } from './ProgressBar'
import { Answers } from 'components/Answers'
import { NextButton } from 'components/NextButton'
import './currentQuestion.css';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div className="currentQuestion">
      <div className="currentQuestionHeader">
        <h1>Question: {question.questionText}</h1>
      </div>
      <div className="currentQuestionAnswer">
        <Answers question={question} />
      </div>
      <div className="currentQuestionNextButton">
        <NextButton />
      </div>
      <div className="currentQuestionProgressBarWrapper">
        <ProgressBarContainer />
      </div>
    </div>

  )
}


//nextbutton is shown when questions is shown. TODO: don't show nextbutton when quizOver is true.