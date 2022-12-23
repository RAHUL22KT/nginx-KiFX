{
    // let username = document.getElementById("username");
    // let password = document.getElementById("password");
    // let logButton = document.getElementById("logButton");
    // logButton.style.display = 'none';

    // username.addEventListener('input', function (event) {
    //     if (username.value == "" || password.value == "") {
    //         logButton.style.display = 'none';
    //     } else
    //         logButton.style.display = 'block';
    // });

    // password.addEventListener('input', function (event) {
    //     if (username.value == "" || password.value == "") {
    //         logButton.style.display = 'none';
    //     } else
    //         logButton.style.display = 'block';
    // });

    // logButton.addEventListener('click', function (event) {
    //     if (username.value == "" || password.value == "") {
    //         alert("clicked");
    //     } else
    //         alert("denied");

    // });

    let s_username = document.getElementById("s_username");
    let s_password = document.getElementById("s_password");
    let s_email = document.getElementById("s_email");
    let signupButton = document.getElementById("signupButton");

    let l_email = document.getElementById("l_email");
    let l_password = document.getElementById("l_password");
    let loginButton = document.getElementById("loginButton");
    const backendURL = 'https://django-server-production-9b32.up.railway.app'; //enter the backend host
    const loginURL = backendURL + '/authentication/login/';
    const signupURL = backendURL + '/authentication/signup/';
    // Example POST method implementation:
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    loginButton.addEventListener('click', function (event) {
        if (l_email.value == "" || l_password.value == "") {
            alert("denied");
        } else {
            postData(loginURL, { "email": l_email.value, "password": l_password.value })
                .then((data) => {
                    console.log(JSON.stringify(data));
                });
        }
    });

    signupButton.addEventListener('click', function (event) {
        if (s_email.value == "" || s_password.value == "" || s_username == "") {
            alert("denied");
        } else {
            postData(signupURL, { "username": s_username.value, "email": s_email.value, "password": s_password.value })
                .then((data) => {
                    console.log(data);
                });
        }
    });

}
