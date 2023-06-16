

const fs = require('fs');

// Question 2 - create a file named node.js architecture and write some information about it

fs.writeFileSync('nodejs_architecture.txt','Node.js is a powerful JavaScript runtime environment that allows developers to execute server-side and networking applications. It follows a single-threaded, event-driven architecture known as the event loop, which enables asynchronous and non-blocking I/O operations.')


// Question 3 - read the nodejs architecture file and print it content
const info = fs.readFileSync('nodejs_architecture.txt');
console.log(' content of the raeding file of node js architecture .......................................',info.toString())

// Question 4 - appending some more information in the file
fs.appendFileSync('nodejs_architecture.txt','                                               Event Loop: At the core of Node.js architecture is the event loop, which manages all the asynchronous operations. It continuously checks for events, such as I/O operations or timers, in a non-blocking manner. When an event occurs, it triggers the associated callback or handler. The event loop ensures that the application remains responsive even while waiting for I/O operations to complete.')


//Question 5 - delete the file
fs.unlink('nodejs_architecture.txt',function(err){
    if(err){
        console.log('error in deleting file')
    }
    else{
        console.log('file delete successfully!!')
    }
})