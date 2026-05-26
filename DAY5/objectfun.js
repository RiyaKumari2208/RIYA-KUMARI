function findTM(no1, no2, no3) {
  return no1 + no2 + no3;
}
const a = {
  marks: { eng: 56, maths: 89, science: 78 },
  name: "Riya",
  roll: 46,
  class: "x",
  findTotalM: findTM,
};
const sum = a.findTotalM(a.marks.eng, a.marks.maths, a.marks.science);
console.log(sum);
