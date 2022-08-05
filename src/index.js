
    let password=document.getElementById('password');
    let toggle=document.getElementsByClassName("far fa-eye");

    toggle[0].addEventListener("click", (event)=>{
        console.log(event)
        if (password.type==="password"){
            password.setAttribute("type","text")  
                   
        }
        else{
        
        password.setAttribute("type","password");     
        }

    });
    document.addEventListener('DOMContentLoaded', (e)=>{
        console.log(e)
    let signup=document.getElementsByClassName('signup-link');
    let login=document.getElementById('loginLink');
    let signupForm=document.getElementsByClassName('form-signup');
    let loginForm=document.getElementsByClassName('form');

    signup[0].addEventListener('click', (e)=>{
        e.preventDefault();
        loginForm[0].classList.add('form--hidden');
        signupForm[0].classList.remove('form--hidden'); 

    })

    login.addEventListener('click', (e)=>{
        e.preventDefault();
        loginForm[0].classList.remove('form--hidden');
        signupForm[0].classList.add('form--hidden'); 

    })

    let landing=document.getElementById('login');
    landing.addEventListener('click', ()=>{
        window.location.href="home.html";
    })
})
    


