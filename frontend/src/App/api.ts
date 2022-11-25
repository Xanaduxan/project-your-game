import Question from "../features/QuestionList/types/Question";


export const loadQuestion = async (): Promise<Question[]> => {
  const res = await fetch('http://localhost:4000/api', {credentials: 'include'});
  console.log(res)
  return res.json();
};

