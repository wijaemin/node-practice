"use strict";

const UserStorage = require("../../models/UserStorage");

const show ={
    home : (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
};



const process={
    login : (req,res) => {
        const id= req.body.id;
        const password=req.body.password;
        

       const users = UserStorage.getUsers("id","password");
        const response ={};
        if(users.id.includes(id)){
            const index = users.id.indexOf(id);
            if(users.password[index] === password){
                response.success=true;
                return res.json(response);
            }
        }
        response.success=false;
        response.msg="로그인 실패";
        return res.json(response);
    }

};


module.exports = {
   show,
   process,
}