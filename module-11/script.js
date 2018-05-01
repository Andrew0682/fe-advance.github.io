"use strict"

const url = "https://test-users-api.herokuapp.com/users/";

// Возвращает всех пользователей из БД

const btnGetAllUsers = document.querySelector(".btnGetAllUsers");
const ret = document.querySelector(".return");
btnGetAllUsers.addEventListener("click", getAllUsers);

function getAllUsers (e) {
    e.preventDefault();
    fetch(url, {method: "GET"})
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
          ret.innerHTML = Object.values(data)[0].reduce((acc,e) =>  acc + `<tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                </tr> `, '');
          })
        .catch(error => {
            console.error("Error: ", error);
        })
}

//Возвращает пользователя с переданным id

const inpGetUserById = document.querySelector(".inpGetUserById");
const btnGetUserById = document.querySelector(".btnGetUserById");
btnGetUserById.addEventListener("click", getUserById);

function getUserById (e) {
  e.preventDefault();
  fetch(url+inpGetUserById.value, {method: "GET"})
  .then(response => {
       if (response.ok) return response.json();
       throw new Error("Error fetching data");
   })
  .then(data => {ret.innerHTML =`
        <tr>
           <td>${data.data.id}</td>
           <td>${data.data.name}</td>
           <td>${data.data.age}</td>
        </tr>`
   })
   .catch(error => {
        console.error("Error: ", error);
   });
   inpGetUserById.value = '';
}

//Записывает в БД юзера с полями name и age

const inpAddUserName = document.querySelector(".inpAddUserName");
const inpAddUserAge = document.querySelector(".inpAddUserAge");
const btnAddUser = document.querySelector(".btnAddUser");
btnAddUser.addEventListener("click", addUser);

function addUser (e) {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ name: inpAddUserName.value, age: inpAddUserAge.value}),
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
  })
    .then(response => {
        if(response.ok) return response.json();
        throw new Error("Error fetching data");
    })
    .then(data => {ret.innerHTML =`
        <tr>
           <td>AddUser</td>
           <td>${data.data.name}</td>
           <td>${data.data.age}</td>
        </tr>`
   })
    .catch(error => {
        console.error("Error: ", error);
    });
     inpAddUserName.value = '';
    inpAddUserAge.value = '';
}

//Удаляет из БД юзера по указанному id

const inpRemoveUser = document.querySelector(".inpRemoveUser");
const btnRemoveUser = document.querySelector(".btnRemoveUser");
btnRemoveUser.addEventListener("click", removeUser);

function removeUser (e) {
  e.preventDefault();
  fetch(url+inpRemoveUser.value, {
    method: "DELETE"
  })
    .then(response => {
        if(response.ok) return response.json();
        throw new Error("Error fetching data");
    })
    .then(data => {ret.innerHTML =`
        <tr>
           <td>(DELETE)${data.data.id}</td>
           <td>${data.data.name}</td>
           <td>${data.data.age}</td>
        </tr>`
   })
    .catch(error => {
        console.error("Error: ", error);
    });
    inpRemoveUser.value = '';
}

//Обновляеть данные пользователя по id. user

const inpUpdateUserId = document.querySelector(".inpUpdateUserId");
const inpUpdateUserName = document.querySelector(".inpUpdateUserName");
const inpUpdateUserAge = document.querySelector(".inpUpdateUserAge");
const btnUpdateUser = document.querySelector(".btnUpdateUser");
btnUpdateUser.addEventListener("click", updateUser);

function updateUser (e) {
  e.preventDefault();
  fetch(url+inpUpdateUserId.value, {
    method: "PUT",
    body: JSON.stringify({ name: inpUpdateUserName.value, age: inpUpdateUserAge.value}),
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
  })
    .then(response => {
        if(response.ok) return response.json();
        throw new Error("Error fetching data");
    })
    .then(data => {ret.innerHTML =`
        <tr>
           <td>(Update)${data.data.id}</td>
           <td>${data.data.name}</td>
           <td>${data.data.age}</td>
        </tr>`
        inpUpdateUserId.value = '';
        inpUpdateUserAge.value = '';
        inpUpdateUserName.value = '';
    })
    .catch(error => {
        console.error("Error: ", error);
    });
}



