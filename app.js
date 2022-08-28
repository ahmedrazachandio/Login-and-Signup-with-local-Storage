// Ahmed Raza

    var mail = ("example@gmail.com");
    var pass = ("12346");
    localStorage.setItem("email1", mail);  
    localStorage.setItem("password1", pass);  

function signUp(){
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;
    
    localStorage.setItem("fullName", fullName);  
    localStorage.setItem("email", email);  
    localStorage.setItem("password", password);  
    localStorage.setItem("repassword", rePassword); 
    
    
}
function login(){
    var loginEmail = document.getElementById("email").value;
    var loginPassword = document.getElementById("password").value;
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");




    // var loginEmail = "";
    // var loginPassword = "";



    if (loginEmail === email && loginPassword === password || loginEmail === email && loginPassword === password ) {
        alert("succesfull");

        // var div = document.createElement('div');
        //     div.className = "alert alert-success";
        //     div.appendChild("body")
        //     document.createTextNode("A simple success alert—check it out!");
   
    }   else {
        alert("Invalid Email or Password");
        // var div = document.createElement('div');
        // div.className = "alert alert-danger";
        // div.appendChild("body");
        // document.createTextNode("Invalid Email Or Password")
        
    }

}

        // var main = document.getElementById('main');
        // var div = document.createElement('div');
        //     div.className = "alert alert-success";
        //     main.appendChild("div")
        //     document.createTextNode("A simple success alert—check it out!");
// var latitude = localStorage.getItem("latitude");
// localStorage.setItem("longitude", response.data.location.lon);  