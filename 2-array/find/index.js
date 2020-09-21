export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  const result = collection
    .filter(person => person.age <= year - 2000 && person.age > year - 2010)
    .map(person => person.name);
  return result[0];
}
