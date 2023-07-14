document.getElementsByName('userName')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('userName')[0].value;
    const regex = new RegExp("[a-zA-Z0-9]+");
    if(!regex.test(input)){
        alert("Only alphanumeric allowed");
        document.getElementsByName('userName')[0].value = '';
    }
});

document.getElementsByName('password')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('password')[0].value;
    if(input.length < 8){
        alert("Password must be at least 8 characters");
        document.getElementsByName('password')[0].value = '';
    }
});

document.getElementsByName('passwordVerify')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('passwordVerify')[0].value;
    if(input != document.getElementsByName('password')[0].value){
        alert("Verify password must match first password");
        document.getElementsByName('passwordVerify')[0].value = '';
    }
});

document.getElementsByName('firstName')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('firstName')[0].value;
    const regex = new RegExp("[a-zA-Z]+");
    if(!regex.test(input)){
        alert("Only alpha allowed");
        document.getElementsByName('firstName')[0].value = '';
    }
});

document.getElementsByName('lastName')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('lastName')[0].value;
    const regex = new RegExp("[a-zA-Z]+");
    if(!regex.test(input)){
        alert("Only alpha allowed");
        document.getElementsByName('lastName')[0].value = '';
    }
});

document.getElementsByName('email')[0].addEventListener('change', function(event){
    let input = document.getElementsByName('email')[0].value;
    const regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,3}$");
    if(!regex.test(input)){
        alert("Improper email address, xxx@xxx.xxx");
        document.getElementsByName('email')[0].value = '';
    }
});

document.getElementsByName('phoneNumber')[0].addEventListener('change', function(event){    
    let input = document.getElementsByName('phoneNumber')[0].value;
    const regex = new RegExp("^[(]{1}[0-9]{3}[)]{1}[ ]{1}[0-9]{3}[-]{1}[0-9]{4}$");
    if(!regex.test(input)){
        alert("Improper phone number, use (xxx) xxx-xxxx");
        document.getElementsByName('phoneNumber')[0].value = '';
    }  
});

document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    //rec event.preventDefault(); // Prevent form submission

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
        return true; //rec
    }
    return false; //rec
});

function debug(){
    document.getElementsByName('userName')[0].value = "abc";
    document.getElementsByName('password')[0].value = "aZ19$@36";
    document.getElementsByName('passwordVerify')[0].value = "aZ19$@36";
    document.getElementsByName('firstName')[0].value = "Nancy";
    document.getElementsByName('lastName')[0].value = "Thomas";
    document.getElementsByName('email')[0].value = "nanct35@gmail.com";
    document.getElementsByName('phoneNumber')[0].value = "(123) 456-7890";
}