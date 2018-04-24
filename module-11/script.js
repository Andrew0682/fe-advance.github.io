"use strict"

const apiUrl = "https://test-users-api.herokuapp.com/users/";


const btnGetAllUsers = document.querySelector(".btnGetAllUsers");
const ret = document.querySelector(".return");
btnGetAllUsers.addEventListener("click", getAllUsers);

function getAllUsers (e) {
    e.preventDefault();
    fetch(apiUrl, {method: "GET"})
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



const inpGetUserById = document.querySelector(".inpGetUserById");
const btnGetUserById = document.querySelector(".btnGetUserById");
btnGetUserById.addEventListener("click", getUserById);

function getUserById (e) {
  e.preventDefault();
  fetch(apiUrl+inpGetUserById.value, {method: "GET"})
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
   })
}


const inpAddUserName = document.querySelector(".inpAddUserName");
const inpAddUserAge = document.querySelector(".inpAddUserAge");
const btnAddUser = document.querySelector(".btnAddUser");
btnAddUser.addEventListener("click", addUser);

function addUser (e) {
  e.preventDefault();
  fetch(apiUrl, {
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
}


const inpRemoveUser = document.querySelector(".inpRemoveUser");
const btnRemoveUser = document.querySelector(".btnRemoveUser");
btnRemoveUser.addEventListener("click", removeUser);

function removeUser (e) {
  e.preventDefault();
  fetch(apiUrl+inpRemoveUser.value, {
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
}


const inpUpdateUserId = document.querySelector(".inpUpdateUserId");
const inpUpdateUserName = document.querySelector(".inpUpdateUserName");
const inpUpdateUserAge = document.querySelector(".inpUpdateUserAge");
const btnUpdateUser = document.querySelector(".btnUpdateUser");
btnUpdateUser.addEventListener("click", updateUser);

function updateUser (e) {
  e.preventDefault();
  fetch(apiUrl+inpUpdateUserId.value, {
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
    })
    .catch(error => {
        console.error("Error: ", error);
    });
}



