/* eslint-disable no-console */
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
    console.log("AC")
    setResult("")
    setOperator("")
    setCurrentValue("")
    setResetEqual(false)
  }
  if (currentValue.toString().length > 1 && param1 === "C") {
    console.log("C")
    const number = currentValue.toString()
    const numberAfterC = number.substring(0, number.length - 1)
    setCurrentValue(parseFloat(numberAfterC, 10))
    setResetEqual(false)
  }
  if (currentValue.toString().length === 1 && param1 === "C") {
    console.log("C")
    setCurrentValue(parseFloat(0, 10))
    setResetEqual(false)
  }
  if (resetEqual === true && param1 !== "AC" && param1 !== "=") {
    console.log("after equal")
    setCurrentValue(parseFloat(param1, 10))
    setResetEqual(false)
  }
  if (param1 === "1" && resetEqual === false) {
    console.log("1")
    setResetEqual(true)
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "2" && resetEqual === false) {
    console.log("2")
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "3" && resetEqual === false) {
    console.log("3")
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "4" && resetEqual === false) {
    console.log("4")
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "5" && resetEqual === false) {
    console.log("5")
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "6" && resetEqual === false) {
    console.log("6")
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "7" && resetEqual === false) {
    console.log("7")
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "8" && resetEqual === false) {
    console.log("8")
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "9" && resetEqual === false) {
    console.log("9")
    setCurrentValue(parseFloat(`${currentValue}${param1}`, 10))
  }
  if (param1 === "0" && resetEqual === false) {
    console.log("0")
    setCurrentValue(`${currentValue}${param1}`)
  }
  if (currentValue !== "" && param1 === ".") {
    console.log(".")
    setCurrentValue(`${currentValue}${param1}`)
  }
  if (currentValue !== "" && param1 === "-") {
    console.log("-")
    setResult(currentValue)
    setCurrentValue("")
    setOperator("-")
    setResetEqual(false)
  }
  if (currentValue !== "" && param1 === "+") {
    console.log("+")
    setResult(currentValue)
    setCurrentValue("")
    setOperator(param1)
    setResetEqual(false)
  }
  if (currentValue !== "" && param1 === "x") {
    console.log("x")
    setResult(currentValue)
    setCurrentValue("")
    setOperator("*")
    setResetEqual(false)
  }
  if (currentValue !== "" && param1 === "/") {
    console.log("/")
    setResult(currentValue)
    setCurrentValue("")
    setOperator("/")
    setResetEqual(false)
  }
  if (currentValue !== "" && param1 === "%") {
    console.log("%")
    setResult(currentValue)
    setCurrentValue("")
    setOperator("%")
    setResetEqual(false)
  }
  if (currentValue !== "" && result !== "" && param1 === "=") {
    console.log("=")
    const newValue = `${result}${operator}${currentValue}`
    const goodValue = eval(newValue)
    setOperator("")
    setResult("")
    setCurrentValue(goodValue)
    setResetEqual(true)
  }
}

export default goodButton
