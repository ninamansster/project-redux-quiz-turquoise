import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { NextButton } from 'components/NextButton'
import { RestartButton } from 'components/RestartButton'
import { CurrentQuestion } from 'components/CurrentQuestion'
import 'app.css'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  const [quizStart, setQuizStart] = useState(false)

  return (
    <Provider store={store}>
      <div className="background">

        {
          !quizStart
          &&
          <div className="introtext">
            <h1 className="introHeading">Time to quiz!</h1>
            <p className="quizCategory"> Do you know the Capital cities in Europe!?</p>
            <button type="button" onClick={() => setQuizStart(true)}>Start</button>
          </div>
        }
        {!store.quizOver && <RestartButton />}

        <NextButton />



        {quizStart && <CurrentQuestion />}
      </div>
    </Provider>
  )
}
