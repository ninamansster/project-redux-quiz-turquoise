import React from 'react'
import { useSelector } from 'react-redux'
// import { ProgressBario } from './ProgressBar'
import { ProgressBarContainer } from './ProgressBar'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <ProgressBarContainer />
    </div>
  )
}
