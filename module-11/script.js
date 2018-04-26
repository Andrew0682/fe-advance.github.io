/*
  Шаблон
*/
const result = document.querySelector(".result");
const htmlTpl = document.querySelector("#templ").textContent.trim();
const compiled = _.template(htmlTpl);

/*
  DOM-элементы (поля ввода - input)
*/
const inputSearch = document.querySelector(".input__search");
const inputAddUsers = document.querySelector(".input__add-name");
const inputAddAge = document.querySelector(".input__add-age");
const inputDelUsers = document.querySelector(".input__del");
const inputPutUsers = document.querySelector(".input__put-id");
const inputPutName = document.querySelector(".input__put-name");
const inputPutAge = document.querySelector(".input__put-age");

/*
  Кнопки форм
*/
const allUsersBtn = document.querySelector("#js-all__users");
const usersIdBtn = document.querySelector("#js-user__id");
const usersAddBtn = document.querySelector("#js-add__user");
const usersDelBtn = document.querySelector("#js-user__del");
const usersPutBtn = document.querySelector("#js-user__put");

/*
  Функции для форм
*/
function getAllUsers(evt) {
  evt.preventDefault();
    
    fetch("https://test-users-api.herokuapp.com/users", {
        method: 'get'
    })
    
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(list => {
        let htmlString = "<h3>Name Users</h3>";
        list.data.forEach(item => {
            htmlString += compiled(item);
        });
        result.innerHTML = htmlString; 
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}

function getUserById(id) {
    
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'get'
    })
    
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(list => {
        let nameFind = list.data.name;
        let htmlString = "<h3>Найденный пользователь:</h3>";
        htmlString += nameFind;
        result.innerHTML = htmlString; 
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}

function addUser(name, age) {
    
    fetch('https://test-users-api.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({ 
            name: name, 
            age: age
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    
    .then(response => {
      if (response.ok) {
         return response.json(); 
      } 
      throw new Error("Error fetching data");
    })
    .then(list => {
        let htmlString = "<h3>Новый пользователь удачно добавлен</h3>";
        result.innerHTML = htmlString; 
    })
    .catch(err => {
      console.error("Error: ", err);
    });
    inputAddUsers.value = '';
    inputAddAge.value = '';
}

function removeUser(id) {
    
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'DELETE'
    })
    
    .then(response => {
      if (response.ok) {
         return response.json(); 
      } 
      throw new Error("Error fetching data");
    })
    .then(list => {
        inputDelUsers.value = '';
        let htmlString = "<h3>Пользователь удален</h3>";
        result.innerHTML = htmlString; 
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}

function updateUser(id, user) {
    
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    
    .then(response => {
      if (response.ok) {
         return response.json(); 
      } 
      throw new Error("Error fetching data");
    })
    .then(list => {
        let htmlString = "<h3>Данные пользователя обновлены</h3>";
        result.innerHTML = htmlString; 
        inputPutUsers.value = '';
        inputPutAge.value = '';
        inputPutName.value = '';
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}

/*
   Вспомогательные функции
*/
const findUserName = event => {
    event.preventDefault();
    getUserById(inputSearch.value);
};

const addNewUsers = event => {
    event.preventDefault();
    addUser(inputAddUsers.value, inputAddAge.value);
};

const deleteUser = event => {
    event.preventDefault();
    removeUser(inputDelUsers.value);
};

const putUser = event => {
    event.preventDefault();
    const user = {
        name: inputPutName.value, 
        age: inputPutAge.value
    };
    updateUser(inputPutUsers.value, user);
};

/*
  События
*/
allUsersBtn.addEventListener("click", getAllUsers);
usersIdBtn.addEventListener("click", findUserName);
usersAddBtn.addEventListener("click", addNewUsers);
usersDelBtn.addEventListener("click", deleteUser);
usersPutBtn.addEventListener("click", putUser);
