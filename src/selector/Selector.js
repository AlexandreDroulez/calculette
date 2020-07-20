/* eslint-disable no-eval */
export const goodButton = (
  param1,
  currentValue,
  setCurrentValue,
  setOperator,
  result,
  setResult,
  operator,
  setResetEqual,
  resetEqual
) => {
  if (param1 === "AC") {
    setResult("")
    setOperator("")
    setCurrentValue("")
  }
  if (resetEqual === true) {
    setCurrentValue(parseFloat(param1, 10))
  }
  if (param1 === "1" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "2" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "3" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "4" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "5" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "6" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "7" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "8" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "9" && resetEqual === false) {
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "0" && resetEqual === false) {
    setCurrentValue(`${currentValue}${param1}`)
  }
  if (param1 === ".") {
    setCurrentValue(`${currentValue}${param1}`)
  }
  if (param1 === "-") {
    setResult(currentValue)
    setCurrentValue("")
    setOperator("-")
    setResetEqual(false)
  }
  if (param1 === "+") {
    setResult(currentValue)
    setCurrentValue("")
    setOperator(param1)
    setResetEqual(false)
  }
  if (param1 === "x") {
    setResult(currentValue)
    setCurrentValue("")
    setOperator("*")
    setResetEqual(false)
  }
  if (param1 === "/") {
    setResult(currentValue)
    setCurrentValue("")
    setOperator("/")
    setResetEqual(false)
  }
  if (param1 === "=") {
    const newValue = `${result}${operator}${currentValue}`
    const goodValue = eval(newValue)
    setOperator("")
    setResult("")
    setCurrentValue(goodValue)
    setResetEqual(true)
  }
}

export default goodButton
