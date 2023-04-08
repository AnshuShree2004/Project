 async function getPosts(){ 
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json
        console.log(data)
    }
    catch(error){
      console.log(error)
    }
    finally{
        console.log("Api is closed")
    }
}