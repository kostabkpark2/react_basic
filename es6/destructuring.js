let student = {
    name : "홍길동",
    score :  90
}

// let name = student.name;
// let score = student.score;
// 객체의 구조분해 할당 (이름 기반(O), 위치기반(X))
let {score,name} = student;

//console.log(name, score);

let array = [1,2,3,4,5];

// let a = array[0];
// let b = array[1];
// let c = array[2];
// 배열의 구조분해 할당 (위치 즉 index 기반(O))
//let [a,b] = array;
let [a, ...rest] = array;

console.log(a,rest);