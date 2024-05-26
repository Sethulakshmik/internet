let nameSpan = document.querySelector('.name');
let inputUsername = document.querySelector('#inputUsername');
let inputName = document.querySelector('#inputName');
let inputPassword = document.querySelector('#inputPassword');

const setName = () => {
    if (inputUsername.value.trim() === "") {
        alert("Please enter your username.");
        return;
    }

    if (inputName.value.trim() === "") {
        alert("Please enter your surname.");
        return;
    }

    if (inputPassword.value.trim() === "") {
        alert("Please enter your password.");
        return;
    }

    nameSpan.textContent = inputName.value;
    // You can handle the password input here as needed
};