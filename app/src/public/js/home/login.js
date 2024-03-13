"use strict";

const id = document.querySelector("#id")
    ,password = document.querySelector("#password"),
    loginBtn =document.querySelector("#button");




loginBtn.addEventListener("click", login);

function login() {
    if(!id.value) {
        return alert("아이디를 입력해주세요");
    }
    if(!password.value){
        return alert("비밀번호를 입력해주세요");
    }
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
    .then((res)=>{
        if(res.success){
            location.href="/";
        }
        else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error("로그인 중 에러 발생");
    })
}

