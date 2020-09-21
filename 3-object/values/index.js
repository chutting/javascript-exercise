export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const sum = Object.values(source).reduce((value1, value2) => Number(value1) + Number(value2));
  return sum;
}
