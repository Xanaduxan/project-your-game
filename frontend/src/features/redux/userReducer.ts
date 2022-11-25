import Action from "../Registration/types/Action";


export const init = {
  user: '' 
};
export const userReducer = (
    state: { user: string } = init,
    action: Action
   ): { user: string } => {
    switch (action.type) {
     case 'REGISTRATION':
      return {
        ...state,
        user: action.payload.user
      };
      case 'LOGOUT':
        return {
          ...state,
          user: ''
        };
    default: return state;
  }
 };
