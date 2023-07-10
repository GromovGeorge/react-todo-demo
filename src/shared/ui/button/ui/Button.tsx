import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cls from './Button.module.scss'
import { classNames } from '../../../lib/classNames/classNames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, type = 'button', ...rest } = props

  return (
    <>
      <button
        className={classNames(cls.button, {}, [className])}
        type={type}
        {...rest}
      >
        {children}
      </button>
    </>
  )
}
