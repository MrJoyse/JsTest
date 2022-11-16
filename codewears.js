let text = "Hey fellow warriors";
let result = "";
let words = [];
let word = [];
words = text.split(" ");
for (let index = 0; index < words.length; index++) {
    if(words[index].length >= 5){
        word = words[index].split("").reverse();
        result = result + word.join('') + " ";
    }
    else{
        word = words[index].split("");
        result = result + word.join('') + " " ;
    }
}
result = result.trim();
console.log(result);