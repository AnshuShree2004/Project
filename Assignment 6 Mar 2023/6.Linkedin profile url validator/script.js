const urlReg=/^https?:\/\/www\.linkedin\.com\/in\/[\w\-]+[\w\d]$/gim

function isValidLinkedinUrl(url){
  const urlCheck=urlReg.test(url)
  if(urlCheck>=5 && urlCheck<=30){
    console.log(`The Linkedin url ${url} is valid`)
  }else{
    console.log(`The Linkedin url ${url} is not valid`)
  }
}

isValidLinkedinUrl("https://www.linkedin.com/in/anshu-shree-0262")
