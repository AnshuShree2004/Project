const urlReg=/^https?:\/\/[\w\d\S]+?\.[\w]+$/gim;
function isValidURL(url){
    if(urlReg.test(url)){
        console.log(`The URL ${url} is valid.`)
    }
    else{
        console.log(`The URL ${url} is not valid.`)
    }
}
isValidURL("https://www.example.com")
