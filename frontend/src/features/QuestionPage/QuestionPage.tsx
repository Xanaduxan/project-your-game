import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './QuestionPage.css';
import { RootState } from '../redux/store';

function QuestionPage() : JSX.Element {
const { id } = useParams();
const { questions } = useSelector((state:RootState) => state.questionState)
const question = questions.find((quest) => quest.id === Number(id));

const [check, setCheck] = useState('none')
const [flag, setFlag] = useState<null | Boolean>(null);
const [answer, setAnswer] = useState('');


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
}

const showAnswer = () => {
    setCheck('wrong')
}

  return (
    <>

    <h1>Вопрос</h1>
    <p>{question?.question}</p>
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setAnswer(e.target.value)} 
      value={answer}
      name="answer" type="text" />
      <button onClick={showAnswer} type="submit">Ответить</button>
    { check === 'right' && (<div className="right">Правильно! Ты заработал</div>)}
    { check ==='wrong' && (<div className="wrong">Ответ неверный! Правильный ответ:{question?.answer}</div>)}
    </form>


    </>
  )
}

export default QuestionPage