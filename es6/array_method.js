let food = ["a","b","c"];
food.push("d");

// console.log(food);

let last = food.pop();
// console.log(last, food);

let array = [1,2,3,4];
let array2 = array.map(() => "^");
// console.log(array, array2);

let array3 = array.map((item) => item*10);
// console.log(array, array3);

let str = "abc";

function strCheck(str) {
    return ["aaa", "bbb", "abc", "bcd"].includes(str);
    //if(str == "aaa" || str == "abc" || str == "bcd" || str == "bbb") {
    //     return true;
    // } else {
    //     return false;
    // }
}

let result = strCheck(str);
console.log(result);