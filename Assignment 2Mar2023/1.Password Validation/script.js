//password validation
function isPasswordValid(entered,confirmed)
{
if(entered===confirmed){
  console.log("Password matched.Password validation successful.")
}
else{
  console.log("Password did not matched.Password validation unsuccessful.")
}
}
//calling function
isPasswordValid(123,123);//valid
isPasswordValid(123,126);//unvalid

