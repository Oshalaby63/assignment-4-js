var signupName = document.getElementById('signName');
var signupEmail = document.getElementById('signName');
var signupPassword = document.getElementById('signpassword');
var user = [];
var btn=document.getElementById('btn');

if (localStorage.getItem('user')!=null) {
    user=JSON.parse(localStorage.getItem('user'))
}else{
    user=[];
}

function add() {
    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class="text-center"> All inputs are required </p>`
        console.log('hello');
    } else {
        var obj = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value,
        }
        user.push(obj)
        document.getElementById('message').innerHTML='click agin to sign up'
        btn.innerHTML='<a class"text-white text-decoration-none" href="../index.html">Sign up</a>';
        localStorage.setItem('user',JSON.stringify(user));
    }
}
btn.addEventListener("click" ,function () {
    add();
})