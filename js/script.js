const btnAdd = document.querySelector(".add-works");
let parentWork = document.querySelector(".works");
let countWork = document.querySelector(".count-work");
const input = document.querySelector(".input input");
const error = document.querySelector(".err");
let listTask = [];

countWork.innerHTML = 0;

window.onload = function () {
    if (JSON.parse(localStorage.getItem("taskElement")) != null) {
        listTask = JSON.parse(localStorage.getItem("taskElement"));
        display();
    }
}
// add localStorage :)
btnAdd.addEventListener('click', () => {
    if (input.value != "") {
        error.innerHTML = "";
        listTask.push(input.value);
        if (localStorage.getItem("taskElement") === null) {
            localStorage.setItem("taskElement", JSON.stringify(listTask));
        } else {
            localStorage.setItem("taskElement", JSON.stringify(listTask));
        }
        display();
    } else {
        error.innerHTML = "لطفا یک کار به عنوان ورودی وارد کنید."
    }
})
//add tasks
function display() {
    let el = "";
    listTask.forEach((data, index) => {
        el += `
        <div onClick="(() => this.classList.toggle('taskCompleted'))()" class="task">${data}
         <span onClick="deleteThisTask(${index})" class="del">&#xf1f8;</span>
         </div>
            `
    })
    parentWork.innerHTML = el;
    input.value = "";
    countWork.innerHTML = listTask.length;
    if(countWork.innerHTML != 0) {
        clearAll.style.opacity = 1;
    } else {
        clearAll.style.opacity = .6;
    }
}
// delete one task
function deleteThisTask(index) {
    listTask.splice(index, 1);
    localStorage.setItem("taskElement", JSON.stringify(listTask));
    display();
}
//ClearAll
let clearAll = document.querySelector(".clear-all");

clearAll.addEventListener('click', () => {
    clearAll.style.opacity = .6;
    listTask = [];
    localStorage.setItem("taskElement", JSON.stringify(listTask));
    display();
})



