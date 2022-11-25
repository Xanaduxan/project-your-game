import Action from "./types/Action";
import State from "./types/State";

export const init = {
  questions: []
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
      questions: action.payload
    };
   
   
    default: return state;
  }
 };