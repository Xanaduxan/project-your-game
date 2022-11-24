import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import QuestionItem from '../QuestionItem/QuestionItem'
import { RootState } from '../redux/store';
import * as api from '../../App/api';

const QuestionList = (): JSX.Element => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state:RootState) => state.questionState);

  return (<>
    <div className='themes'>
    <div>Тема 1</div>
    <div>Тема 2</div>
    <div>Тема 3</div>
    </div>
    <div>{questions.map((question) => (
      <QuestionItem key={question.id} question={question} />
    ))}</div>
  </>
  )
}

export default QuestionList