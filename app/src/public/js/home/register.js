"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn =document.querySelector("#button");


console.log("hello");



registerBtn.addEventListener("click", register);

function register() {
    const req= {
        id: id.value,
        name:name.value,
        password: password.value,
        confirmPassword:confirmPassword.value,
    };
    fetch("/register",{
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify(req),

    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href="/login";
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error("회원가입 중 에러 발생");
    })
}

