function titleChange() {
    let title = document.querySelector("h2");
    console.log(title)
    let flag = true;
    if(flag) {
        title.innerHTML = "Soccer Form (MouseOver Effect)"
        title.style.color = "Red"
    }
}

function validateForm() {
    var fields = ["fan" , "played", "teams", "player", "position", "email"];
    var i, l = fields.length;
    var fieldname;
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        if (document.forms["myForm"][fieldname].value === "") {
            document.forms["myForm"][fieldname].style.border = "5px solid red";
            alert(fieldname + " can not be empty");
            return false;
        }
    }
    return true;
}