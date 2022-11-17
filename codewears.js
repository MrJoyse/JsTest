//В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
let str = "xo";
let x_count = 0;
let o_count = 0;
let letter = str.split("");
letter.forEach(element => {
    switch (element) {
        case "o":
            o_count++;
            break;
        case "O":
            o_count++;
            break;
        case "x":
            x_count++;
            break;
        case "X":
            x_count++;
            break;
        default:
            break;
    }
});
if (x_count === o_count) {
    console.log(true);
    return true;
} else {
    console.log(false);
    return false;
}

