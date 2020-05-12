function displayweight() {
    var myRange = document.getElementById("rangeWeight");
    var myLabel = document.getElementById("lblweight");

    myLabel.innerHTML = myRange.value + "kg"
}
function checkFormData(){
    var myEmail = document.forms["form1"]["email"].value
    if (myEmail==""){
        alert("請輸入Email!");
        return false;
    }
}