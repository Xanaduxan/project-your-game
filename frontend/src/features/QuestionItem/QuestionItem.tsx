import React from 'react'
import Question from '../QuestionList/types/Question'
import { useDispatch } from 'react-redux';
import * as api from '../../App/api';

const QuestionItem = ({ question }: { question: Question }): JSX.Element  => {
   const dispatch = useDispatch();
   return (
   
    <div>QuestionItem {question.question}</div>
  )
}

export default QuestionItem