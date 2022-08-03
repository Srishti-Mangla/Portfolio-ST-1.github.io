// Form-Filled-Validation
function validateForm(){
    var x = document.forms["siteForm"]["name"].value;
    var y = document.forms["siteForm"]["email"].value;
    var z = document.forms["siteForm"]["message"].value;
    if(x=="" || y=="" || z==""){
        alert("Form must be filled out.");
        return false;
    }else{
        confirmAlert();
    }
}

// Message-Send-Status-Confirm-Alert
function confirmAlert(){
    if(confirm("Click OK to Send Message.")){
        alert("Message sent successfully.");
    }else{
        alert("You cancelled the message.");
    }
}

// Back-to-Top-Button
function topFunction(){
    document.documentElement.scrollTop=0;
}