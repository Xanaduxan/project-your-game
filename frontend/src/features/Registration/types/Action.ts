import { Res } from "./User";

type Action =
 | { type: 'REGISTRATION'; payload: Res }
 | {type: 'LOGOUT';}


export default Action;