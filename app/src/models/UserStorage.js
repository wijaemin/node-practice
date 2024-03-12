"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data,id){
        const users =JSON.parse(data);
        const index =users.id.indexOf(id);//가져온 id가 users에서 몇번째 id인지 가져옴
        const usersKeys= Object.keys(users);//users의 키값들만 가져옴
        const userInfo =usersKeys.reduce((newUser, info)=>{//키값들로 반복문 돌림 newUser는 새 오브젝트, info는 키값들 순서대로
            newUser[info] = users[info][index];
            return newUser;
        },{});
        return userInfo;
    }

    static getUsers(...fields){
        // const users= this.#users;
        const newUsers= fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] =users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    
    static getUserInfo(id){  

        return fs.readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUserInfo(data,id);
        })
        .catch(console.error);

    }



    static save(userInfo){
        // const users= this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success : true};
    }
}
module.exports = UserStorage;