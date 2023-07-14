function msg(name, msg){
    document.getElementById(name).innerHTML = msg;
}

function checkUserName(){
    msg("userName", "");
    let error = "";
    if(document.getElementsByName('userName')[0].value != ""){
        let input = document.getElementsByName('userName')[0].value;
        const regex = new RegExp("[a-zA-Z0-9]+");
        if(!regex.test(input)){
            msg('userName', " Only alphanumeric allowed");
            error = "userName";
        }
    }else{
        msg("userName", " Required Field");
        error = "userName";
    }
    return error;
}

function checkPassword(){
    msg("password", "");
    let error = "";
    if(document.getElementsByName('password')[0].value != ""){
        let input = document.getElementsByName('password')[0].value;
        if(input.length < 8){
            msg('password', " Password must be at least 8 characters");
            error = "password";
        }
    }else{
        msg("password", " Required Field");
        error = "password";
    }
    return error;
}

function checkPasswordVerify(){
    msg("passwordVerify", "");
    let error = "";
    if(document.getElementsByName('passwordVerify')[0].value != ""){
        let input = document.getElementsByName('passwordVerify')[0].value;
        if(input != document.getElementsByName('password')[0].value){
            msg('passwordVerify', " Verify password must match first password");
            error = "passwordVerify";
        }
    }else{
        msg("passwordVerify", " Required Field");
        error = "passwordVerify";
    }
    return error;
}

function checkFirstName(){
    msg("firstName", "");
    let error = "";
    if(document.getElementsByName('firstName')[0].value != ""){
        let input = document.getElementsByName('firstName')[0].value;
        const regex = new RegExp("[a-zA-Z]+");
        if(!regex.test(input)){
            msg('firstName', " Only alpha allowed");
            error = "firstName";
        }
    }else{
        msg("firstName", " Required Field");
        error = "firstName";
    }
    return error;
}

function checkLastName(){
    msg("lastName", "");
    let error = "";
    if(document.getElementsByName('lastName')[0].value != ""){
        let input = document.getElementsByName('lastName')[0].value;
        const regex = new RegExp("[a-zA-Z]+");
        if(!regex.test(input)){
            msg('lastName', "Only alpha allowed");
            error = "lastName";
        }
    }else{
        msg("lastName", " Required Field");
        error = "lastName";
    }
    return error;
}

function checkEmail(){
    msg("email", "");
    let error = "";
    if(document.getElementsByName('email')[0].value != ""){
        let input = document.getElementsByName('email')[0].value;
        const regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[.]{1}[a-z]{2,3}$");
        if(!regex.test(input)){
            msg('email', "Improper email address, use xxx@xxx.xxx");
            error = "email";
        }
    }
    return error;
}

function checkPhoneNumber(){
    msg("phoneNumber", "");
    let error = "";
    if(document.getElementsByName('phoneNumber')[0].value != ""){
        let input = document.getElementsByName('phoneNumber')[0].value;
        const regex = new RegExp("^[(]{1}[0-9]{3}[)]{1}[ ]{1}[0-9]{3}[-]{1}[0-9]{4}$");
        if(!regex.test(input)){
            msg('phoneNumber', "Improper phone number, use (xxx) xxx-xxxx");
            error = "phoneNumber";
        }         
    }
    return error;
}    

document.getElementsByName('userName')[0].addEventListener('change', function(event){
    checkUserName();
});
document.getElementsByName('password')[0].addEventListener('change', function(event){
    checkPassword();
});
document.getElementsByName('passwordVerify')[0].addEventListener('change', function(event){
    checkPasswordVerify();
});
document.getElementsByName('firstName')[0].addEventListener('change', function(event){
    checkFirstName();
});
document.getElementsByName('lastName')[0].addEventListener('change', function(event){
    checkLastName();
});
document.getElementsByName('email')[0].addEventListener('change', function(event){
    checkEmail();
});
document.getElementsByName('phoneNumber')[0].addEventListener('change', function(event){
    checkPhoneNumber();
});

document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    //rec event.preventDefault(); // Prevent form submission
        
    let error = checkUserName();

    let error2 = checkPassword();
    if(error == "" && error2 != ""){
        error = error2;
    }

    error2 = checkPasswordVerify();
    if(error == "" && error2 != ""){
        error = error2;
    }

    error2 = checkFirstName();
    if(error == "" && error2 != ""){
        error = error2;
    }

    error2 = checkLastName();
    if(error == "" && error2 != ""){
        error = error2;
    }

    error2 = checkEmail();
    if(error == "" && error2 != ""){
        error = error2;
    }

    error2 = checkPhoneNumber();
    if(error == "" && error2 != ""){
        error = error2;
    }
    
    if(error == ""){
        //rec simulateConfirmationPHP();
    }else{
        event.preventDefault(); // Prevent form submission //rec 
        document.getElementsByName(error)[0].focus();
    }
});

function simulateConfirmationPHP(){
    let alertStr = "The following registration has been submitted:";
    alertStr += "\nUsername: " + document.getElementsByName('userName')[0].value;
    alertStr += "\nPassword: ***";
    alertStr += "\nVerify password: ***";
    alertStr += "\nFirst Name: " + document.getElementsByName('firstName')[0].value;
    alertStr += "\nLast Name: " + document.getElementsByName('lastName')[0].value;
    alertStr += "\nEmail: " + document.getElementsByName('email')[0].value;
    alertStr += "\nPhone number: " + document.getElementsByName('phoneNumber')[0].value;
    if(document.getElementsByName('signUpNewsletter')[0].checked){
        alertStr += "\nNewsletter signup: " + document.getElementsByName('signUpNewsletter')[0].value;
    }else{
        alertStr += "\nNewsletter signup: " + document.getElementsByName('signUpNewsletter')[1].value;
    }
    alert(alertStr);
    window.location.reload();
}

//rec
function debug(){
    document.getElementsByName('userName')[0].value = "abc";
    document.getElementsByName('password')[0].value = "aZ19$@36";
    document.getElementsByName('passwordVerify')[0].value = "aZ19$@36";
    document.getElementsByName('firstName')[0].value = "Nancy";
    document.getElementsByName('lastName')[0].value = "Thomas";
    document.getElementsByName('email')[0].value = "nanct35@gmail.com";
    document.getElementsByName('phoneNumber')[0].value = "(123) 456-7890";
}