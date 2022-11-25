export default interface Question {
  id?: number,
  themeId: number,
  question: string,
  answer: string,
  price: number,
}
export type QuestionId = Question['id']