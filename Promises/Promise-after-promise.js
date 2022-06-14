let first1 = first()
let second2 = first1.then((result)=>{
    return second(result)
})
second2.then(console.log)

