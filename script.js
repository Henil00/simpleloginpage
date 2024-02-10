function validateform(){
    let x = document.forms["test"]["username"].value;
    let y = document.forms["test"]["password"].value;
    if (x == "") {
        alert("Please fille Username Field");
        return false;
      }
    else if(y == "") {
        alert("Please fille Password Field");
        return false;
    } 
    else if (x == "admin" && y == "admin@123"){
        return true;
    }
    else{
        alert("Please enter valid crediantial")
        return false;
    }
}