import Question from "../../QuestionList/types/Question";

type Action =
 | { type: 'INIT_QUESTION'; payload: Question[] }
 | { type: 'SCORE_PLUS'; payload: number }
 | { type: 'SCORE_MINUS'; payload: number }


export default Action;
