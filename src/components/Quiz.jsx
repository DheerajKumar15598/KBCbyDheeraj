import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import play from "../sound/src_sounds_play.mp3"
import correct from "../sound/src_sounds_correct.mp3"
import wait from "../sound/src_sounds_wait.mp3"
import wrong from "../sound/src_sounds_wrong.mp3"

const Quiz = ({data, setStop, questionNo, setQuestionNo}) => {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")
    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)
    const [letsWait] = useSound(wait)

    useEffect(()=>{
      letsPlay()
    },[letsPlay])

    const delay = (duration, callback) => {
      setTimeout(()=>{
        callback();
      }, duration);
    }

    const handleClick = (a) => {
      setSelectedAnswer(a)
      setClassName("answer active")

      delay(3000, () =>
      wait(),
        setClassName(a.correct ? "answer correct" : "answer wrong")
      );

      delay(4000, () =>
        {
          if(a.correct){
            correctAnswer()
            delay(4000, ()=>{
              setQuestionNo(prev => prev+1);
              setSelectedAnswer(null)
            })
          }else{
            wrongAnswer()
            delay(4000, ()=>{
              setStop(true)
            })
          }
        }
      )
    }

    useEffect(()=>{
        setQuestion(data[questionNo -1])
    },[data, questionNo])

  return (
    <div className='quiz'>
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div className={selectedAnswer == a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
        ))}
      </div>
    </div>
  )
}

export default Quiz
