import React from 'react'
import Question from '../QuestionList/types/Question'
import { useDispatch } from 'react-redux';


const QuestionItem = ({ question }: { question: Question }): JSX.Element  => {
   const dispatch = useDispatch();
   return (
   
    <button className='question'>{question.question}</button>
  )
}

export default QuestionItem