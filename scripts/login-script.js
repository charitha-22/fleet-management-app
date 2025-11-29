function login(){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    if(email === "admin@gmail.com" && pass === 'admin1234'){
        alert("Login Success!!");
        window.location.href="admin.html"
    }else{
        alert("Wrong email or password");
    }
}