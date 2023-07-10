import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITodo } from '../types/Todo.interface'
import { getAllTodos } from '../thunk/TodoThunk'
import { formatTime } from '../../libs/formatTime'
import { todos } from '../mock/Todos'

interface ITodoState {
  todos: ITodo[]
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected'
  error: unknown | null
}

const initialState: ITodoState = {
  todos: todos,
  status: 'idle',
  error: null,
}

export const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<string>) {
      state.todos.unshift({
        userId: 1313,
        id: Number(new Date()),
        title: action.payload,
        completed: false,
        createdAt: formatTime(new Date()),
      })
    },
    deleteTodo(state, action: PayloadAction<ITodo['id']>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleCompleteTodo(state, action: PayloadAction<ITodo['id']>) {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     // GET ALL TODOS
  //     .addCase(getAllTodos.pending, (state) => {
  //       ;(state.status = 'loading'), (state.error = null)
  //     })
  //     .addCase(getAllTodos.fulfilled, (state, action) => {
  //       ;(state.status = 'fulfilled'),
  //         (state.todos = action.payload),
  //         (state.error = null)
  //     })
  //     .addCase(getAllTodos.rejected, (state, action) => {
  //       ;(state.status = 'rejected'), (state.error = action.payload)
  //     })
  // },
})

export const { createTodo, deleteTodo, toggleCompleteTodo } = TodoSlice.actions
