import { FC } from 'react'
import { formatTime } from '../../libs/formatTime'
import { ITodo } from '../../model/types/Todo.interface'
import { useAppDispatch } from '../../../../shared/hooks/redux'
import { deleteTodo, toggleCompleteTodo } from '../../model/slice/TodoSlice'
import { ToggleCompleteTodo } from '../../../../features/ToggleCompleteTodo/ui/ToggleCompleteTodo'
import { DeleteTodo } from '../../../../features/DeleteTodo/ui/DeleteTodo'
import cls from './TodoElement.module.scss'

interface TodoElementProps {
  data: ITodo
}

export const TodoElement: FC<TodoElementProps> = ({ data }) => {
  const { title, createdAt, completed, id } = data

  const dispatch = useAppDispatch()

  const handleToggleTodoStatus = (id: ITodo['id']) => {
    dispatch(toggleCompleteTodo(id))
  }

  const handleDeleteTodo = (id: ITodo['id']) => {
    dispatch(deleteTodo(id))
  }

  const classText = [cls.text]
  const classLine = [cls.line]

  if (completed) {
    classText.push(cls.done)
    classLine.push(cls.done)
  }

  return (
    <>
      <div className={cls.todo}>
        <ToggleCompleteTodo
          id={id}
          isCompleted={completed}
          toggleTodo={handleToggleTodoStatus}
        />
        <div className={classText.join(' ')}>{title}</div>
        <div className={cls.time}>{formatTime(createdAt)}</div>
        <div className={classLine.join(' ')}></div>
        <DeleteTodo id={id} deleteTodo={handleDeleteTodo} />
      </div>
    </>
  )
}
