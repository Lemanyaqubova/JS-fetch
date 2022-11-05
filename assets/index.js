const localBtn = document.querySelector(".form button");
const newTbody = document.querySelector("tbody");

localBtn.addEventListener("click", () => {
    let username = document.getElementById("username");
    let surname = document.getElementById("surname");
    let age = document.getElementById("age");
    let status = document.getElementById("status");

    if (!username.value.trim().length) {
        alert("Please write correct")
    } else {
        const users = {
            username: `${username.value}`,
            surname: `${surname.value}`,
            age: `${age.value}`,
            status: `${status.value}`,
        }

        function setUser(data) {
            document.querySelector("Tbody").innerHTML += localStorage.getItem("inf")
            fetch("https://6363a6918a3337d9a2e35b6d.mockapi.io/users", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(data),
            });

        }
        getUser();
        setUser(users)

    }

});


// const fetchedJson = fetched.then((item) => item.json());
// fetchedJson
//     .then((item) => {
//         console.log(item);
//     }).catch((err) => console.log(err));

function getUser() {
    const fetched = fetch("https://6363a6918a3337d9a2e35b6d.mockapi.io/users");
    fetched.then((response) => response.json()).then((data) => {
        data.forEach(element => {
            newTbody.innerHTML +=
                `<tr>
                                <td>${element.username}</td>
                                <td>${element.surname}</td>
                                <td>${element.age}</td>
                                <td>${element.status}</td>
                                     </tr>`
        });

    });
}