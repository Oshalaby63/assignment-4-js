var user=[];
user=JSON.parse(localStorage.getItem('user'));
var btn=document.getElementById('login');
var signinemail=document.getElementById('signEmail');
var signinpassword=document.getElementById('signPass');

document.getElementById('login').addEventListener('click' , function(){
    if(signinemail.value==''||signinpassword.value==''){
        document.getElementById('message').innerHTML=`<p class='text-center'> All inputs are required </p>`;
    }else{
        checkUser();
    }
})

function checkUser() {
    for(var i=0;i<user.length;i++){
        if(signinemail.value==user[i].email && signinpassword.value==user[i].password){
            var y=user[i].name;
            localStorage.setItem('UserName',y);
            document.getElementById('message').innerHTML=`<p class='text-center'> click agian to sign in</p>`;
            btn.innerHTML='<a class"text-white text-decoration-none" href="home/index.html">Log in</a>';
        }else{
            document.getElementById('message').innerHTML=`<p class='text-center'> you not have an account go sign up</p>`;
            btn.innerHTML='<a class"text-white text-decoration-none" href="sign up/index.html">sign up</a>';
        }
    }
}
