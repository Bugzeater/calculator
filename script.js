let outputscreen = document
.getElementById("outputscreen")
function display(num){
    outputscreen.value += num
}
function Calculate()
try{
    outputscreen.value = eval
    (outputscreen.value);
}
catch(err)
{
    alert("Invalid")
}