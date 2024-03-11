"use strict";


const show ={
    home : (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
};

const users={
    id:["1","2","3"],
    password:["1","2","3"]
}

const process={
    login : (req,res) => {
        const id= req.body.id;
        const password=req.body.password;
        
        if(users.id.includes(id)){
            const index = users.id.indexOf(id);
            if(users.password[index] === password){
                return res.json({
                    success:true,
                });
            }
        }
        return res.json({
            sucess:false,
            msg:"로그인 실패",
        });
    }

};


module.exports = {
   show,
   process,
}