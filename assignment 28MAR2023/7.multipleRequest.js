async function multipleRequest(){
    const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data1 = await response1.json
    const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data2 = await response1.json
    const obj = {todos:obj.data1 , posts:obj.data2}
    console.log(obj)
}