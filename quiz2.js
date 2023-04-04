let dbUsers=[
    {
        username:"Soo",
        password:"123456",
        name:"Soo",
        email:"Soo@student.utem.edu.my"
    },
    {
        username:"Sam",
        password:"1wer",
        name:"Sam Zhi Kang",
        email:"b022120028@student.utem.edu.my"
    },
    {
        username:"Kiew",
        password:"ewef4",
        name:"Kiew Yan hui",
        email:"b022120024@student.utem.edu.my"
    }
]

function login(reqUsername,reqPassword){
    let matchUser = dbUsers.find(user=>user.username==reqUsername ) //find base on element in array 
    //console.log(matchUser)
    

    if(!matchUser) 
    return "User not found!"

    if(matchUser.password==reqPassword){
        return matchUser
    }
    else {
        return "Invalid password"
    }
}
/*
    let matchPass = dbPass.find(password=>password.password==reqPassword) //find base on element in array 
    if t
    console.log("true pawword")

    for(let i=0;i<dbUser.length;i++){
        console.log(dbUser[i])
        if(dbUser[i].username==reqUsername)
    }
}*/
function register(reqUsername,reqPassword,reqName,reqEmail){
    dbUsers.push({
        username:reqUsername,
        password:reqPassword,
        name:reqName,
        email:reqEmail
    })
}
// try to login
console.log(login("utem","ewef"))
register("utem","password","fkekk","fkekk@gmail.com")
console.log(login("utem","password"))