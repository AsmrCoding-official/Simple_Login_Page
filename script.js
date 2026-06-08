function login(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("passwprd").value;
    let error =  document.getElementById("error");
    if(user=== "" || password === ""){
        error.innerText=("Please fill all fields!");
    }
    else if(user=="admin" && pass=="1234"){
        error.style.color="11b6ffb6";
        error.innerText("Login successful!");
    }
    else{
        error.style.color = "#ffdddd"
        error.innerText = "Invalid username or passowrd!";
    }

}