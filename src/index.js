
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

    


