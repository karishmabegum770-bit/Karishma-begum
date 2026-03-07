function calculate(){

let name=document.getElementById("name").value;

let marks=document.getElementById("marks").value;

let result;

if(marks>=50){

result="Pass";

}
else{

result="Fail";

}

document.getElementById("output").innerHTML=
"Student Name: "+name+"<br>Marks: "+marks+"<br>Result: "+result;

}



function toggleMode(){

document.body.classList.toggle("dark");

}
let completed = 0;
let total = 5;

function completeTask(button){

let task = button.parentElement;

if(!task.classList.contains("completed")){

task.classList.add("completed");

button.innerText = "Done";
button.disabled = true;

completed++;

document.getElementById("progressText").innerText =
completed + " / " + total + " Activities Completed";

document.getElementById("progressBar").value = completed;

}

}
