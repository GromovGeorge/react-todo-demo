import { FC } from 'react'
import cls from './ToggleCompleteTodo.module.scss'
import { ITodo } from '../../../entities/todo/model/types/Todo.interface'

interface ToggleCompleteTodoProps {
  id: ITodo['id']
  isCompleted: boolean
  toggleTodo: (id: ITodo['id']) => void
}

export const ToggleCompleteTodo: FC<ToggleCompleteTodoProps> = (props) => {
  const { id, isCompleted, toggleTodo } = props

  const classButton = [cls.button]
  const classStatus = [cls.status]

  if (isCompleted) {
    classButton.push(cls.done)
    classStatus.push(cls.done)
  }

  return (
    <>
      <button
        className={classButton.join(' ')}
        type='button'
        onClick={() => toggleTodo(id)}
      >
        <div className={classStatus.join(' ')}>✔</div>
      </button>
    </>
  )
}
