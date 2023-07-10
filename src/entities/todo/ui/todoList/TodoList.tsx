import { useAppSelector } from '../../../../shared/hooks/redux'
import { TodoSelector } from '../../model/selector/TodoSelector'
import { TodoElement } from '../todoElement/TodoElement'

export const TodoList = () => {
  const { todos } = useAppSelector(TodoSelector)

  return (
    <>
      {todos.map((todo) => (
        <TodoElement data={todo} key={todo.id} />
      ))}
    </>
  )
}
