// Ahmed Raza

    var mail = ("example@gmail.com");
    var pass = ("12346");
    localStorage.setItem("email", mail);  
    localStorage.setItem("password", pass);  

function signUp(){
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;
    
    localStorage.setItem("fullName", fullName);  
    localStorage.setItem("email", email);  
    localStorage.setItem("password", password);  
    localStorage.setItem("password", rePassword); 
    
    
}
    
    



// var latitude = localStorage.getItem("latitude");
// localStorage.setItem("longitude", response.data.location.lon);  