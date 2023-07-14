function readCookies(){
    let cookies = document.cookie.replaceAll("; ", "&");
    const urlParams = new URLSearchParams(cookies);
    let confirm = document.getElementById('confirm');
    confirm.innerHTML = "userName: " + urlParams.get('userName') +
                        "<br>password: " + urlParams.get('password') +
                        "<br>firstName: " + urlParams.get('firstName') +
                        "<br>lastName: " + urlParams.get('lastName') +
                        "<br>email: " + urlParams.get('email') +
                        "<br>phoneNumber: " + urlParams.get('phoneNumber') +
                        "<br>signUpNewsletter: " + urlParams.get('signUpNewsletter') +
                        "<br>interest1: " + urlParams.get('interest1') +
                        "<br>interest2: " + urlParams.get('interest2') +
                        "<br>interest3: " + urlParams.get('interest3') +
                        "<br>interest4: " + urlParams.get('interest4')
                        ;
}