function register(user,email,age,gender,why,password){
    let url="../jsons/users.json"
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        let info={"user":user,"email":email,"age":age,"gender":gender,"why":why,"password":password}
        data["clients"].append(info)
    })
}

document.getElementById("button").onclick=function(){
    register("caca","caca@gmail.com",15,"H","NF","caquita")
}