let users = [];
// [{name:username,email:email}]
let userContainer = document.getElementById("userContainer");
let alert = document.getElementById("alert");

alertTime = () => {
    setTimeout(() => {
        alert.classList.remove("success", "danger","remove");
    },2000)
}

addUser = () => {
    // console.log("function called")
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    // console.log(name.value);
    // console.log(email.value);
    // console.log(users[0].email);
    if (name.value != "" && email.value != "") {        
        if (users.length == 0) {
            pushUser(name.value, email.value);
            addUserToList();
            alert.innerText = "User added successfully!!!"
            alert.classList.add("success");
            alertTime();
        } else {
            let flag = 0;
            users.forEach(n => {
                if (n.email == email.value) {
                    flag = 1;
                    alert.innerText = "❌ Email already exists!!!"
                    alert.classList.add("danger");
                    alertTime();
                } 
            })
            if(flag==0){   
                pushUser(name.value, email.value);
                addUserToList();
                alert.innerText = "User added successfully!!!"
                alert.classList.add("success");
                alertTime();
            }
        
        }
        name.value = "";
        email.value = "";
    }
}

addUserToList = () => {
    let div = document.createElement("div");
    div.classList.add("user");
    let name = document.createElement("p");
    name.classList.add("information","name-field");
    let email = document.createElement("p");
    email.classList.add("information");
    let delBtn = document.createElement("button");
    delBtn.classList.add("delbtn");
    // let delimg = document.createElement("img");
    // delimg.setAttribute("src", "img/trash3.svg");
    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(delBtn);
    // delBtn.appendChild(delimg);
    name.innerText = users[users.length - 1].name;
    email.innerText = users[users.length - 1].email;
    userContainer.appendChild(div);
}

pushUser = (userName,userEmail) => {
    let user = {
        name: userName,
        email: userEmail
    }
    users.push(user);
}

removeUserfromArray = (user) => {
    for (i = 0; i < users.length; i++){
            if (users[i].email == user[1]) {
                users.splice(i, 1);
            }
        }
}

deleteUser = (event) => {
    if (event.target.nodeName == "BUTTON") {
        // console.log("hii");
        let parentOfBtn = event.target.parentElement;
        let childernNode = parentOfBtn.children;
        // console.log(childernNode);
        let user = [];
        for (i = 0; i < childernNode.length; i++){
            if (childernNode[i].tagName == "P")
                user.push(childernNode[i].innerText);
                // console.log(childernNode[i].innerText);
        }
        // console.log(user);
        removeUserfromArray(user);
        parentOfBtn.remove();
        alert.innerText = "User removed successfully!!!"
        alert.classList.add("remove");
        alertTime();
        console.log(users);
    }
}
    
userContainer.addEventListener("click", deleteUser);


// console.log("hii");