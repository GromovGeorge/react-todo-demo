import { combineReducers } from '@reduxjs/toolkit'
import { TodoSlice } from '../../../../entities/todo/model/slice/TodoSlice'

export const rootReducer = combineReducers({
  [TodoSlice.name]: TodoSlice.reducer,
})
