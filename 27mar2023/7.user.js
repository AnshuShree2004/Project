class User {
    constructor(username,password){
        this.username = username
        this._password = password
    }
    getpassword(){
        return '*'.repeat(this._password.length)
    }
    setpassword(newpassword){
        if(newpassword.length >=8 && /[0-9]/.test(newpassword) && /[A-Z]/.test(newpassword)){
            this._password=newpassword
        } else{
            console.log('Password must be at least 8 characters long and contains at least one number and one uppercase letter.')

        }
    }
}

let user = new User('anshu','passwoQ123')
console.log(user.getpassword())

user.setpassword('myPassword789')
console.log(user.getpassword())

user.setpassword(1234)
