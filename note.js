var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popupbox")
var addpopup = document.getElementById("addpopup")


addpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelpopup = document.getElementById("cancelpopup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


var container=document.querySelector(".container")
var addtask = document.getElementById("add-task")
var taskname = document.getElementById("task-name")
var taskdate = document.getElementById("task-date")
var taskdescription = document.getElementById("task-description")

addtask.addEventListener("click",function(event){

    event.preventDefault()
    if (!taskname.value.trim() || !taskdate.value || !taskdescription.value.trim()) {
        alert("Please fill in all fields!");
        return;
    }
    var div = document.createElement("div")
    div.setAttribute("class","note-container")
    div.innerHTML = `
    <h2 style="font-family: cursive;">${taskname.value}</h2>
    <h5>${taskdate.value}</h5>
    <p>${taskdescription.value}</p>
    <button class="delete-button">Delete</button>
`;
    container.append(div)
    taskname.value = "";
    taskdate.value = "";
    taskdescription.value = "";
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

container.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
    }})
