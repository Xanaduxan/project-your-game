import Action from "./types/Action";
import State from "./types/State";

export const init = {
  questions: [],
  score: 0,
};
// reducer.ts
export const questionReducer = (
  state: State = init,
  action: Action
 ): State => {
  switch (action.type) {
   case 'INIT_QUESTION':
    return {
      ...state,
      questions: action.payload,
    };
    case 'SCORE_PLUS': 
    return {
      ...state,
      score: state.score + action.payload,
    };
    case 'SCORE_MINUS': 
    return {
      ...state,
      score: state.score - action.payload,
    };
   
   
    default: return state;
  }
 };