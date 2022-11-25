import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './QuestionPage.css';
import { RootState } from '../redux/store';

function QuestionPage() : JSX.Element {
const { id } = useParams();
const { questions } = useSelector((state:RootState) => state.questionState);
const question = questions.find((quest) => quest.id === Number(id));

const [check, setCheck] = useState('none');

const [answer, setAnswer] = useState('');
const navigate = useNavigate();
const [count, setCount] = useState(20);
const handleSubmit = (e: React.FormEvent) : void => {
    e.preventDefault();
//     if (question) {
//     if (answer.toLowerCase() === question.answer.toLowerCase()) {
//       setFlag(true);
//       score += question.price;
//     } else {
//       setFlag(false);
//       score -= question.price;
//     }
//   }
};
useEffect(() => {
  const timer = setTimeout(() => {
    setCount(count - 1);
}, 1000);
if (count === 0) {
    clearTimeout(timer);
}
}, [count]);
const showAnswer = () => {
    if (answer.toLowerCase() === question?.answer.toLowerCase()) {
      setCheck('right');
      setTimeout(() => { navigate('/play'); }, 1000);
    } else {
      setCheck('wrong');
      setTimeout(() => { navigate('/play'); }, 1000);
    }
};

  return (
    <>

    <h1>Вопрос</h1>
    <p>{question?.question}</p>
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
        name="answer"
        type="text"
      />
      <button onClick={showAnswer} type="submit">Ответить</button>
      <div>{!count ? 'Time is out' : count}</div>
    { check === 'right' && (<div className="right">Правильно! Ты заработал {question?.price}</div>)}
    { check === 'wrong' && (<div className="wrong">Ответ неверный! Правильный ответ: {question?.answer}</div>)}
    </form>

    </>
  );
}

export default QuestionPage;
