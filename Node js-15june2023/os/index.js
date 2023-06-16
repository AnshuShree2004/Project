// question 6 - obtain system name and release using os module

const os = require('os');

console.log('Operating system name  ',os.type())
console.log('os release ',os.release())