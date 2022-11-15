let n = 89;
var p = 1;
var result = 0;
var number = 0;
var count = n.length - 1;
for (var i = 0; i < n.length; i++) {
    result = result + n[i] ** p;
    p++;
}
for (var i = 0; i < n.length; i++){
    number = number + n[i] * (10 ** (count));
    count--;
}
if(result % number === 0){
    console.log(result / number);
    return result / number;
}
else{
    console.log(-1)
    return -1;
}
