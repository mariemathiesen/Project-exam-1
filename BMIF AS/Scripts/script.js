function validateForm() {
    var name = document.forms.test.name.value;
    var phone = document.forms.test.phone.value;
    var email = document.forms.test.email.value;  
    var comment = document.forms.test.comment.value;

    var nameErrorElement = document.getElementById('nameError');
    var phoneErrorElement = document.getElementById('phoneError');
    var emailErrorElement = document.getElementById('emailError');
    var commentErrorElement = document.getElementById('commentError');

    var validName = true;
    var validPhone = true;
    var validEmail = true;
    var validComment = true;

    if (name == "") {
        //alert ("Please fill out name!");
        var noName = "Please fill out name!";
        nameErrorElement.innerHTML = noName;
        //return false;
        validName = false;
    } else {
        nameErrorElement.innerHTML = "";
        validName = true;
    }

    phonenumber = phone.replace(/ /g,''); // Fjern alle spaces
    phonepattern = /^\d{8}$/;
    if (!phonepattern.test(phonenumber)) {
        //alert ("Please fill out a valid phonenumber!");
        var noPhone = "Please fill out a valid phonenumber!";
        phoneErrorElement.innerHTML = noPhone;
        //return false;
        validPhone = false;
    } else {
        phoneErrorElement.innerHTML = "";
        validPhone = true;
    }

    // emailpattern = /^\w+@\w+\.\w+$/; // https://www.regular-expressions.info/email.html
    var emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailpattern.test(email)) {
        //alert ("Please fill out a valid email-address");
        var noEmail = "Please fill out a valid email-address";
        emailErrorElement.innerHTML = noEmail;
        //return false;
        validEmail = false;
    } else {
        emailErrorElement.innerHTML = "";
        validEmail = true;
    }

    var email2 = document.forms.test.email2.value;  
    var email2ErrorElement = document.getElementById('email2Error');
    var matchEmail = true;

    if (email != email2) {
        var diffEmail = "The email-addresses doesn't match";
        email2ErrorElement.innerHTML = diffEmail;
        matchEmail = false;
    } else {
        email2ErrorElement.innerHTML = "";
        matchEmail = true;
    }

    if (comment == "") {
        //alert ("Please fill out a comment!");
        var noComment = "Please fill out a comment!";
        commentErrorElement.innerHTML = noComment;
        //return false;
        validComment = false;
    } else {
        commentErrorElement.innerHTML = "";
        validComment = true;
    }

    return validName && validPhone && validEmail && validComment && matchEmail;
 }

 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

