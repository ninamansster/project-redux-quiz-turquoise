import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './ProgressBar.css';

const Range = (props) => {
  return (
    <div className="range" style={{ width: `${props.percentRange}%` }} />
  )
};

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Range percentRange={props.percentRange} />
    </div>
  )
};

export const ProgressBarContainer = () => {
  const [percentRange, setProgress] = useState(0)
  const answers = useSelector((store) => store.quiz.answers.length)
  const questions = useSelector((store) => store.quiz.questions.length)
  const currentQuestion = useSelector((store) => store.quiz.currentQuestionIndex + 1)

  return (
    <div className="progress-container">
      <ProgressBar percentRange={percentRange} />
      {currentQuestion} / {questions}
      <div className="toggle-buttons">
        {/* TEST Progress bar with button. Use setProgress with the chosen trigger */}

        <button type="button" onClick={() => {
          setProgress((answers / questions) * 100)
        }}>Test progress bar</button>
      </div>
    </div>
  )
}