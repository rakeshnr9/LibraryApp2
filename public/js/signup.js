let name = document.getElementById("name");
let username = document.getElementById("username");
let pass = document.getElementById("pass");
let pass2 = document.getElementById("pass2");
let errorpass = document.getElementById("errorpass");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let email = document.getElementById("email");
let phone = document.getElementById("phone");


function validateGender() {
    var gender = form.querySelectorAll("gender");
    if (!gender.length) {
        alert('You must select male or female');
        return false;
    }
}



   function  validEmailId() {


let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

        if (regexp.test(email.value)) {
error.innerHTML="Valid";
error.style.color="green";

            return true;
        } else {
            error.innerHTML="InValid Email Id";
error.style.color="red";

            return false;
        }


    }

function phoneNumber()
{
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if ( phoneno.test(phone.value)) {
    error1.innerHTML="Valid";
    error1.style.color="green";

                return true;
            } else {
                error1.innerHTML="InValid Phone Number";
    error1.style.color="red";

                return false;
            }
}


function pswMatch(){

if(pass.value==pass2.value)
{
    errorpass.innerHTML="Passwords are Matching";
    errorpass.style.color= "green";
    return true;
}
else{
    errorpass.innerHTML="Passwords are not Matching";
    errorpass.style.color= "red";
    return false ;
}
}

