let [a, op, b] = parse("1.2 * 3.4");

function parse(str) {
  const regExp = /(?<a>-?\d+(\.\d+)?) (?<op>[+\-*/]) (?<b>-?\d+(\.\d+)?)/;
  const groupsObj = str.match(regExp).groups;
  const { a, op, b } = groupsObj;
  return [a, op, b];
}

console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4

