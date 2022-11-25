import Question from "../../QuestionList/types/Question";

type Action =
 | { type: 'INIT_QUESTION'; payload: Question[] }


export default Action;
