"use strict";

class UserStorage {
   static #users={
        id:["위재민","조강희","나성운"],
        name:["위재민","조강희","나성운"],
        password:["1","2","3"],
    }

    static getUsers(...fields){
        const users= this.#users;
        const newUsers= fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] =users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    
    static getUserInfo(id){
        const users= this.#users;
        const index =users.id.indexOf(id);//가져온 id가 users에서 몇번째 id인지 가져옴
        const usersKeys= Object.keys(users);//users의 키값들만 가져옴
        const userInfo =usersKeys.reduce((newUser, info)=>{//키값들로 반복문 돌림 newUser는 새 오브젝트, info는 키값들 순서대로
            newUser[info] = users[info][index];
            return newUser;
        },{});
        return userInfo;
    }
}
module.exports = UserStorage;