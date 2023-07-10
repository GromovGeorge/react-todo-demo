import { FC, FormHTMLAttributes, useState } from 'react'
import { Input } from '../../../shared/ui/input'
import { Button } from '../../../shared/ui/button'
import { CreateTodo } from '../../../features/CreateTodo'
import cls from './Form.module.scss'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form: FC<FormProps> = (props) => {
  const { ...rest } = props

  const [inputValue, setInputValue] = useState('')

  const handleClearInput = () => {
    setInputValue('')
  }

  return (
    <>
      <form className={cls.form} {...rest}>
        <Input
          placeholder='Add New Todo...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CreateTodo
          className={cls.ok}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Button className={cls.clear} onClick={handleClearInput}>
          Clear
        </Button>
      </form>
    </>
  )
}
