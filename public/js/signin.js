

let error = document.getElementById("error");

let email = document.getElementById("email");






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




