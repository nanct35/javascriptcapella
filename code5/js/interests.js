//get hidden values use cookies and display hidden values and interests
function loadHidden(){

//get hidden values
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    document.getElementById('userName').value = urlParams.get('userName');
    document.getElementById('password').value = urlParams.get('password');
    document.getElementById('firstName').value = urlParams.get('firstName');
    document.getElementById('lastName').value = urlParams.get('lastName');
    document.getElementById('email').value = urlParams.get('email');
    document.getElementById('phoneNumber').value = urlParams.get('phoneNumber');
    document.getElementById('signUpNewsletter').value = urlParams.get('signUpNewsletter');
}
//use cookies below including new interest fields
document.getElementsByTagName('form')[0].addEventListener('submit', function(event){
    document.cookie = "userName=" + document.getElementById('userName').value;
    document.cookie = "password=" + document.getElementById('password').value;
    document.cookie = "firstName=" + document.getElementById('firstName').value;
    document.cookie = "lastName=" + document.getElementById('lastName').value;
    document.cookie = "email=" + document.getElementById('email').value;
    document.cookie = "phoneNumber=" + document.getElementById('phoneNumber').value;
    document.cookie = "signUpNewsletter=" + document.getElementById('signUpNewsletter').value;

    document.cookie = "interest1=" + document.getElementById('interest1').checked;
    document.cookie = "interest2=" + document.getElementById('interest2').checked;
    document.cookie = "interest3=" + document.getElementById('interest3').checked;
    document.cookie = "interest4=" + document.getElementById('interest4').checked;

    return true;
});