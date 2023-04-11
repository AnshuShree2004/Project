async function multipleRequest(){
    const [data1,data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json()) ,
    ])
    const combinedData = {
        todo : data1,
        posts : data2,
    }
    return combinedData
}
multipleRequest().then((data) => console.log(data))