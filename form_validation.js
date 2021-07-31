let email=document.getElementById("email");
let password = document.getElementById("password");
let flag=1;
function validateForm(){ 
    emailStr= email.value;
    if(emailStr.substr(-10) != "@gmail.com"){
        alert("Tip: Use gmail address");
        document.getElementById("emailError").innerText="Invalid mail address";
        flag=0;
    }else{
        document.getElementById("emailError").innerText="";
    }
    let passStr=password.value;
    if(passStr.length < 8 ){
        alert("Tip: Strong Password is at least 8 digit long like @tyhA5pK");
        document.getElementById("passwordError").innerText="Invalid password";
        flag=0;
    }else{
        document.getElementById("passwordError").innerText="";
    }
    if(flag)return true;
    else return false;
}


const togglePassword=document.getElementById("togglePassword");
togglePassword.addEventListener("click",function(e){
    const type=password.getAttribute("type")==='password' ? 'text' : 'password';
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});


function changeTheme(color){
    let theme =document.getElementById("login-form");
    theme.style.backgroundColor=color;
    if(color=="black"){
        const b =  document.getElementById("heading").style;
        b.color="white";
    }
    if(color=="white"){
        const b =  document.getElementById("heading").style;
        b.color="black";
    }
}