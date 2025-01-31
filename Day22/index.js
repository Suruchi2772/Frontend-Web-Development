async function getuser(){
    let data = await fetch('https://randomuser.me/api');
    let result = await data.json();
    // console.log(result);
    let user = result.results[0];
    console.log(user);

    document.getElementById("profile-img").src = user.picture.large;
    let name = document.getElementById("name");
    let username = document.getElementById("username");
    let dob = document.getElementById("dob");
    name.textContent =  user.name.first +" "+ user.name.last;
    username.textContent = user.login.username;
    let date=user.dob.date.split("T");
    // console.log(date);
    dob.textContent = date[0]; 
    let email = document.getElementById("email");
    let call = document.getElementById("call");
    let location = document.getElementById("location");
    email.textContent = user.email;
    call.textContent = user.phone;
    location.textContent = user.location.city+", "+user.location.state+", "+user.location.country;
}


function getEmail() {
    let email = document.getElementById("email");
    let call = document.getElementById("call");
    let location = document.getElementById("location");
    email.classList.toggle("hidden");
    call.classList.add("hidden");
    location.classList.add("hidden")
}

function getCall() {
    let email = document.getElementById("email");
    let call = document.getElementById("call");
    let location = document.getElementById("location");
    call.classList.toggle("hidden");
    email.classList.add("hidden");
    location.classList.add("hidden")
}

function getLocation() {
    let email = document.getElementById("email");
    let call = document.getElementById("call");
    let location = document.getElementById("location");
    location.classList.toggle("hidden");
    email.classList.add("hidden");
    call.classList.add("hidden")
}