import { createAsyncThunk } from '@reduxjs/toolkit'
import { $axios } from '../../../../shared/api'
import { AxiosError } from 'axios'
import { ITodo } from '../types/Todo.interface'
import { formatTime } from '../../libs/formatTime'

export const getAllTodos = createAsyncThunk<
  ITodo[],
  undefined,
  { rejectValue: string }
>('todos/getAllTodos', async function (_, { rejectWithValue }) {
  try {
    const response = await $axios.get(`/todos?_limit=2000`)
    return await response.data
  } catch (error) {
    const err = error as AxiosError
    return rejectWithValue(err.message || 'Failed to load Todos. Try again...')
  }
})
