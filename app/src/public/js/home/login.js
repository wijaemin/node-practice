"use strict";

const id = document.querySelector("#id")
    ,password = document.querySelector("#password"),
    loginBtn =document.querySelector("button");



console.log(id);

loginBtn.addEventListener("click", login);

function login() {
    const req= {
        id: id.value,
        password: password.value,
    };
    fetch("/login",{
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify(req),

    })
    .then((res)=>res.json())
    .then(console.log)
}

