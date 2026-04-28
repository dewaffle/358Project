function changeHomeContent()
{
    alert("Button works");
}

function mouseOverMessage()
{
    document.getElementById("hoverMessage").innerHTML =
    "Mouse is over the image";
}


function mouseOutMessage()
{
    document.getElementById("hoverMessage").innerHTML =
    "Mouse left the image";
}


function validateLogin()
{
    var email = document.getElementById("loginEmail").value;

    var password = document.getElementById("loginPassword").value;

    if(email == "")
    {
        alert("Please enter your email");
        return false;
    }

    if(password == "")
    {
        alert("Please enter your password");
        return false;
    }

    alert("Login Successful");
    return true;
}


function validateSignup()
{
    var fullname = document.getElementById("fullname").value;

    var email = document.getElementById("signupEmail").value;

    if(fullname == "")
    {
        alert("Please enter full name");
        return false;
    }

    if(email == "")
    {
        alert("Please enter email");
        return false;
    }

    alert("Account Created");
    return true;
}


function focusFunction(element)
{
    element.style.backgroundColor = "lightyellow";
}


function blurFunction(element)
{
    element.style.backgroundColor = "white";
}


function createList()
{
    var text = "";
    var i;

    text = "<ul>";

    for(i = 1; i <= 5; i++)
    {
        text += "<li>Relationship Level " + i + "</li>";
    }

    text += "</ul>";

    document.getElementById("dynamicArea").innerHTML = text;
}