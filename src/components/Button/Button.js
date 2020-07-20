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
}) => {
  return (
    <div
      className={buttonClassName}
      role="button"
      tabIndex={0}
      onClick={() => {
        goodButton(children, currentValue, setCurrentValue, setOperator, result, setResult, operator)
      }}
      onKeyUp={() => {
        goodButton(children, currentValue, setCurrentValue, setOperator, result, setResult)
      }}
    >
      {children}
    </div>
  )
}

export default Button
