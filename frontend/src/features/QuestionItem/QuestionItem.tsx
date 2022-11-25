import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Question from '../QuestionList/types/Question';

function QuestionItem({ question }: { question: Question }): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

   function onHandleNavigate(): void {
    navigate(`${question.id}`);
   }

   return (

    <button
      type="button"
      onClick={onHandleNavigate}
      className="question"
    >{question.price}
    </button>
  );
}

export default QuestionItem;
