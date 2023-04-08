function takingBook(obj){
    console.log(obj)
}
function arrangeTitle(obj,callback){
    let myMap = new Map(obj.title)
    callback(myMap)
}
let books ={
    {title :"" , author : "",year : ""},
    {title :"" , author : "",year : ""},
    {title :"" , author : "",year : ""},
    {title :"" , author : "",year : ""},
}
arrangeTitle(books,takingBook)