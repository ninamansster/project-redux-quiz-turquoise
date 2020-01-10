import React from 'react'
import { useSelector } from 'react-redux'
import { ProgressBarContainer } from './ProgressBar'
import { Answers } from 'components/Answers'
import { NextButton } from 'components/NextButton'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizEnd = useSelector((state) => state.quiz.quizOver)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      {!quizEnd && (
        <div>
          <h1>Question: {question.questionText}</h1>
          <Answers question={question} />
          <NextButton />
          <ProgressBarContainer />
        </div>
      )
      }
    </>
  )
}


//nextbutton is shown when questions is shown. TODO: don't show nextbutton when quizOver is true.