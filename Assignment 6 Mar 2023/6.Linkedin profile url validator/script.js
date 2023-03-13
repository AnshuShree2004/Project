let regxPattern=/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+[a-zA-Z0-9]$ /igm
let userIdUrl="https://www.linkedin.com/in/anshu-shree7";

let profileId = regxPattern.test(userIdUrl)
if(profileId.length>=5 && profileId.length<=30){
  console.log("It is valid")
}
else{
  console.log("It is not valid ")
}
