let value = "A";

//if(value =="" || value == 0 || value == false || value == undefined || value == null || Number.isNaN(value)) {
if(!value) {
    console.log("falsy 한 값입니다.");
} else {
    console.log("truthy 한 값입니다.");
}
