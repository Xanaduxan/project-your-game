import { createContext } from 'react';
import { init } from '../questionReducer';
import { Context } from './types/context';

const initialContextValue:Context = {
state:init,
dispatch:()=>{}
}
// наша переменная для формирования 'обёртки' контекста
const stateContext = createContext(initialContextValue);

// экспортируем контекст
export default stateContext;