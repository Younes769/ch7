function countWords(message) {
  let words = message.split(" ");
  return words.length;
}
let message = "There is no war in Ba Sing Se";
console.log(countWords(message));
