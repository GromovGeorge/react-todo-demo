import { FC } from 'react'
import { Button } from '../../../shared/ui/button'
import { useAppDispatch } from '../../../shared/hooks/redux'
import { createTodo } from '../../../entities/todo/model/slice/TodoSlice'

interface CreateTodoProps {
  className?: string
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const CreateTodo: FC<CreateTodoProps> = (props) => {
  const { className, inputValue, setInputValue } = props

  const dispatch = useAppDispatch()

  const handleCreateTodo = () => {
    dispatch(createTodo(inputValue))
    setInputValue('')
  }

  return (
    <>
      <Button className={className} onClick={handleCreateTodo}>
        Ok
      </Button>
    </>
  )
}
