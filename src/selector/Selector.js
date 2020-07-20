/* eslint-disable no-eval */
export const goodButton = (
  param1,
  currentValue,
  setCurrentValue,
  setOperator,
  result,
  setResult,
  operator
) => {
  if (param1 === "AC") {
    setCurrentValue(0)
  }
  if (param1 === "1") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "2") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "3") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "4") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "5") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "6") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "7") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "8") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "9") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === "0") {
    return setCurrentValue(parseInt(`${currentValue}${param1}`, 10))
  }
  if (param1 === ".") {
    return setCurrentValue(`${currentValue}${param1}`)
  }
  if (param1 === "-") {
    setResult(currentValue)
    setCurrentValue("")
    setOperator("-")
  }
  if (param1 === "+") {
    setResult(currentValue)
    setCurrentValue("")
    setOperator(param1)
  }
  if (param1 === "x") {
    setResult(currentValue)
    setCurrentValue("")
    setOperator("*")
  }
  if (param1 === "/") {
    setResult(currentValue)
    setCurrentValue("")
    setOperator("/")
  }
  if (param1 === "=") {
    const newValue = `${result}${operator}${currentValue}`
    const goodValue = eval(newValue)
    setCurrentValue(goodValue)
  }
  return param1
}

export default goodButton
