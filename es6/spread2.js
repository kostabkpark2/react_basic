let student = {
    name : "홍길동",
    score : 90
};

let age = "age";
let student1 = {...student, [age]: 20, address : "대한민국"};
let student2 = student;

console.log(student, student1);

student2[age] = 20;
console.log(student, student2);

// console.log(student == student1)
// console.log(student == student2)
