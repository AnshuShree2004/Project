//vowels
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  
  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  
  return count;
}
const str = "Hello, World!";
const vowelCount = countVowels(str);
console.log(`The string "${str}" contains ${vowelCount} vowels.`);
// Output: The string "Hello, World!" contains 3 vowels.

