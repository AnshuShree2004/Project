//Captalize
function captalize(name){
  let firstName=name.charAt(0).toUpperCase();
  let nameWithoutFirstLetter=name.slice(1);
  let captalizeName = firstName+nameWithoutFirstLetter;
  return captalizeName;
}
let nameReturned=captalize("Anshu");
name ? console.log(name) : console.log(captalize(nameReturned));
