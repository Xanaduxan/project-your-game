export default interface User {
    email:string;
    password:string;
    login?: string;
    score?: number;
  }

  export interface Res { message:string; user:string }