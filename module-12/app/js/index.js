

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