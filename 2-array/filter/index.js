function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(number => number % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const collectionWithoutRepeat = [];

  collection.forEach(number => {
    if (collectionWithoutRepeat.indexOf(number) === -1) {
      collectionWithoutRepeat.push(number);
    }
  });
  return collectionWithoutRepeat;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
