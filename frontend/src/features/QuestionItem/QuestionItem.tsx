import React from 'react'
import Question from '../QuestionList/types/Question'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const QuestionItem = ({ question }: { question: Question }): JSX.Element  => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
   function onHandleNavigate (): void {
    navigate(`${question.id}`);
   }

   return (
   
    <button onClick={onHandleNavigate} className='question'>{question.price}</button>
  )
}

export default QuestionItem