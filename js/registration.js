//get each element and examine matches criteria or present error message
//get username and verify only aplha 
document.getElementsByName('userName')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('userName')[0].value;
    const regex = new RegExp("[a-zA-Z0-9]+");
    if(!regex.test(input)){
        alert("Only alphanumeric allowed");
        document.getElementsByName('userName')[0].value = '';
    }
});
//get password make sure it is 8 or more characters
document.getElementsByName('password')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('password')[0].value;
    if(input.length < 8){
        alert("Password must be at least 8 characters");
        document.getElementsByName('password')[0].value = '';
    }
});
//get paswword verification and check if it matches password 
document.getElementsByName('passwordVerify')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('passwordVerify')[0].value;
    if(input != document.getElementsByName('password')[0].value){
        alert("Verify password must match first password");
        document.getElementsByName('passwordVerify')[0].value = '';
    }
});
//firstname test for aplha 
document.getElementsByName('firstName')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('firstName')[0].value;
    const regex = new RegExp("[a-zA-Z]+");
    if(!regex.test(input)){
        alert("Only alpha allowed");
        document.getElementsByName('firstName')[0].value = '';
    }
});
//lastname check for alpha
document.getElementsByName('lastName')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('lastName')[0].value;
    const regex = new RegExp("[a-zA-Z]+");
    if(!regex.test(input)){
        alert("Only alpha allowed");
        document.getElementsByName('lastName')[0].value = '';
    }
});
//get email and be sure there is the correct format 
document.getElementsByName('email')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('email')[0].value;
    const regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,3}$");
    if(!regex.test(input)){
        alert("Improper email address, xxx@xxx.xxx");
        document.getElementsByName('email')[0].value = '';
    }
});
//get phone number and verify format  - using expressions to verify number is 0-9 and there is a space and parenthesis
document.getElementsByName('phoneNumber')[0].addEventListener('change', function(event){    
    let input = document.getElementsByName('phoneNumber')[0].value;
    const regex = new RegExp("^[(]{1}[0-9]{3}[)]{1}[ ]{1}[0-9]{3}[-]{1}[0-9]{4}$");
    if(!regex.test(input)){
        alert("Improper phone number, use (xxx) xxx-xxxx");
        document.getElementsByName('phoneNumber')[0].value = '';
    }  
});

document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form submission
//Determine fields that are required and display error if not entered
    if(document.getElementsByName('userName')[0].value == ""){
        alert("Username is a required field");
    }else if(document.getElementsByName('password')[0].value == ""){
        alert("Password is a required field");
    }else if(document.getElementsByName('passwordVerify')[0].value == ""){
        alert("Verify your Password is a required field");
    }else if(document.getElementsByName('firstName')[0].value == ""){
        alert("First Name is a required field");
    }else if(document.getElementsByName('lastName')[0].value == ""){
        alert("Last Name is a required field");
    }else{
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
    }
});