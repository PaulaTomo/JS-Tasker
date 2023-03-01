"use strict";
const btnSubmit = document.getElementById("button-submit");
const tasks = document.getElementById("task");
const messageAlert = document.getElementById("message");
const btnClear = document.getElementById("btnClear");

btnSubmit.addEventListener('click',addTask);
tasks.addEventListener("click", handleTaskClick)
btnClear.addEventListener("click",clearList);

displayMessage("Hey, you have no tasks today!😊")

function  handleTaskClick(event){
    const style = event.target.style;
    if (!style.textDecoration){
        style.textDecoration = "line-through";
    }else {
        style.textDecoration = "";
    }
}
function addTask(){
const newTask = document.getElementById("new-task");
if (inputIsValid(newTask.value)){
    tasks.innerHTML += `<li class="list-group-item"> ${newTask.value}</li>`
newTask.value = "";
    messageAlert.style.visibility = "hidden";
}else {
    displayMessage("Please provide non empty input!😒");
}
}

function displayMessage(message){
    messageAlert.innerText = message;
    messageAlert.style.visibility="visible";
}
function inputIsValid(input){
    if(input){
        return true;
    }else {
        return false
    }
}

function clearList(){
    const taskList =  tasks.getElementsByClassName("list-group-item");
    while(taskList.length > 0){
        taskList[0].parentNode.removeChild(taskList[0])
   }
   displayMessage("Great Job😍")
}
