import { FC } from 'react'
import cls from './DeleteTodo.module.scss'
import { ITodo } from '../../../entities/todo/model/types/Todo.interface'

interface DeleteTodoProps {
  id: ITodo['id']
  deleteTodo: (id: ITodo['id']) => void
}

export const DeleteTodo: FC<DeleteTodoProps> = (props) => {
  const { id, deleteTodo } = props

  return (
    <>
      <div className={cls.button} onClick={() => deleteTodo(id)}>
        &#10008;
      </div>
    </>
  )
}
