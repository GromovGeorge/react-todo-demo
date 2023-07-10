import { $axios } from '../../../../shared/api'

export class TodoService {
  // logic of receiving all todos
  static async getAllTodos() {
    const response = $axios.get(`/todos`)
    return (await response).data
  }

  // logic of receiving one todo
  static async getOneTodo() {}
}
