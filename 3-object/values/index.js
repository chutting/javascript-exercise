export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const sum = Object.values(source).reduce((value1, value2) => value1 + +value2, 0);
  return sum;
}
