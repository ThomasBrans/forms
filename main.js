function ValidateForm() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var zip = document.getElementById("zip");
    var number = document.getElementById("number");
    var age = document.getElementById("age");
    var hobbies = document.getElementById("hobbies");
    removeMessage();
    var valid = true;
    if (firstname.value.length == 0) {
        firstname.nextElementSibling.innerHTML = "Firstname can't be blank";
        valid = false;

    }
    if (lastname.value.length == 0) {
        lastname.nextElementSibling.innerHTML = "lastname can't be blank";
        valid = false;

    }
    if (email.value.length == 0) {
        email.nextElementSibling.innerHTML = "email can't be blank";
        valid = false;

    }
    if (password.value.length == 0) {
        password.nextElementSibling.innerHTML = "password can't be blank";
        valid = false;

    }
    if (confirm_password.value.length == 0) {
        confirm_password.nextElementSibling.innerHTML = "confirm password can't be blank";
        valid = false;

    }
   
    if (address.value.length == 0) {
        address.nextElementSibling.innerHTML = "address can't be blank";
        valid = false;

    }    
     if (city.value.length == 0) {
        city.nextElementSibling.innerHTML = "city can't be blank";
        valid = false;

    }
    if (zip.value.length == 0) {
        zip.nextElementSibling.innerHTML = "zip can't be blank";
        valid = false;

    }


    console.log(firstname);
    return valid;
}
function  removeMessage(){
    var errorinput=document.querySelectorAll(".wrong-input");
    [].forEach.call(errorinput, function(el) {
        el.classlist.remove("wrong-input");
    })

    var errorpara=document.querySelectorAll(".errer");
    var errorinput=document.querySelectorAll(".wrong-input");
    [].forEach.call(errorinput, function(el){
        el.innerHTML="";
    });

    
}
