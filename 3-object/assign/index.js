export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const serialNumber = {
    serialNumber: '12345'
  };

  const status = {
    status: 'processed'
  };
  // eslint-disable-next-line no-param-reassign
  source.properties = Object.assign(source.properties, status);
  const resultObj = Object.assign(source, serialNumber);

  return resultObj;
}
