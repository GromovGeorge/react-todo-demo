import { FC, InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = (props) => {
  const { ...rest } = props
  return (
    <>
      <input className={cls.input} {...rest} />
    </>
  )
}
