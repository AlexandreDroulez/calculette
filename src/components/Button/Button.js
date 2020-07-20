import React from "react"
import "./Button.scss"
import { goodButton } from "../../selector/Selector"

const Button = ({
  children,
  buttonClassName,
  setCurrentValue,
  currentValue,
  setResult,
  operator,
  setOperator,
  result,
  setResetEqual,
  resetEqual
}) => {
  return (
    <div
      className={buttonClassName}
      role="button"
      tabIndex={0}
      onClick={() => {
        goodButton(children, currentValue, setCurrentValue, setOperator, result, setResult, operator, setResetEqual, resetEqual)
      }}
      onKeyUp={() => {
        goodButton(children, currentValue, setCurrentValue, setOperator, result, setResult, operator)
      }}
    >
      {children}
    </div>
  )
}

export default Button
