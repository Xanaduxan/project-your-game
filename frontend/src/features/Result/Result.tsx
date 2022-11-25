import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Result = () => {
  const { score } = useSelector((state:RootState) => state.questionState)
  return (
    <div>Ваш текущий счет: {score}</div>
  )
}

export default Result