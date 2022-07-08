function clearErrors()
{

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error)
{
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    // var Correctname = /^[A-Za-z]+$/;
    
    var name = document.forms['myForm']["fname"].value;
    if (name.length<2){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    // if (typeof(name)!==typeof("Apoorv")){
    //     seterror("name", "Invalid Data ");
    //     returnval = false;
    // }
    // if (name == Correctname){
    //     true;}
    // else{
    //     seterror("name", "*Alphabet is only allowed!");
    //     returnval = false;
    // }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>20){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    if (isNaN(phone)){
        seterror("phone", "*Numeric Value allowed only!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){


        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}
