import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { NextButton } from 'components/NextButton'
import { RestartButton } from 'components/RestartButton'
import { CurrentQuestion } from 'components/CurrentQuestion'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  const [quizStart, setQuizStart] = useState(false)

  return (
    <Provider store={store}>
      <h1>QUIZ</h1>
      {!quizStart && <div><p>Welcome to our quiz.</p>
        <button type="button" onClick={() => setQuizStart(true)}>Start</button></div>}
      <NextButton />
      <RestartButton />
      {quizStart && <CurrentQuestion />}
    </Provider>
  )
}
