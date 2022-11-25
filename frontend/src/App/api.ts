import Question from "../features/QuestionList/types/Question";
import User, { Res } from "../features/Registration/types/User";



export const loadQuestion = async (): Promise<Question[]> => {
  const res = await fetch('http://localhost:4000/api', {credentials: 'include'});
  console.log(res)
  return res.json();
};

export const registration = async (item: User): Promise<Res> => {
  const res = await fetch('http://localhost:4000/registration', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};

export const login = async (item: User): Promise<Res> => {
  const res = await fetch('http://localhost:4000/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};


export const logout = async (): Promise<Res> => {
  const res = await (fetch('http://localhost:4000/logout', {
    credentials: 'include',
  }));
  return res.json();
};


