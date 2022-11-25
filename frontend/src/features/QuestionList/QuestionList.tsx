import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import QuestionItem from '../QuestionItem/QuestionItem'
import { RootState } from '../redux/store';
import * as api from '../../App/api';
import './QuestionList.css'

const QuestionList = (): JSX.Element => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state:RootState) => state.questionState);
  const theme1 = questions.slice(0,5)
  const theme2=questions.slice(5,10)
  const theme3=questions.slice(10,15)
  return (<div className='list'>
    <div className='themes'>
    <div className='rowTheme'>Мемы</div>
    <div className='rowTheme'>kПн</div>
    <div className='rowTheme'>Эльбрус</div>
    </div>
    <div className='q-list'><div className='rows'>
    {theme1.map((question) =>
  <QuestionItem key={question.id} question={question} />)}
  </div>
  <div className='rows'>
    {theme2.map((question) =>
  <QuestionItem key={question.id} question={question} />)}
  </div>
  <div className='rows'>
    {theme3.map((question) =>
  <QuestionItem key={question.id} question={question} />)}
  </div></div>
  
  </div>
  )
}

export default QuestionList