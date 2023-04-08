function greeting(name){
    return new Promise((resolve,reject) => 
    resolve(`hello,${name} !`)
    )
}
greeting("anshu")