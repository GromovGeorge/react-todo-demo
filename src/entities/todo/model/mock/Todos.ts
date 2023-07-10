import { ITodo } from '../types/Todo.interface'

export const todos: ITodo[] = [
  {
    userId: 13,
    id: 3,
    title: 'Buy Pizza from Pizzahut',
    completed: false,
    createdAt: '14:28',
  },
  {
    userId: 13,
    id: 2,
    title: 'Meeting with John Doe',
    completed: false,
    createdAt: '12:10',
  },

  {
    userId: 13,
    id: 1,
    title: 'Morning Walk',
    completed: true,
    createdAt: '7:31',
  },
]
