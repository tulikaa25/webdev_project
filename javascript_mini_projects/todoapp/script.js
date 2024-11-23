const addbutton=document.getElementById("addbtn");
const inputbox=document.querySelector("input");
const tasklist=document.getElementById("tasklist");   
let tasks=[];

function createtask(task)
{ 
    //everytime a new task is added its shown in the ui
    let taskitem=document.createElement("li");      //created a new list item
    taskitem.className="listitems";
    taskitem.innerHTML=`<div class="taskinfo">
                            <input type="checkbox" class="checkbox">
                            <p>${task}</p>
                        </div>
                        <div class="icons">
                             <i class="fa-solid fa-xmark"></i>
                        </div>`;
    tasklist.appendChild(taskitem);                       //appended the new item to existing list
    const cross=taskitem.querySelector(".fa-xmark");     //inside the list item we have delete button
    cross.addEventListener("click",function(){
        deletetask(taskitem,task)});
}

function deletetask(taskitem,task)
{     
       
      tasklist.removeChild(taskitem);       //after removing a task we have to delete it fromarray also
      tasks.splice(tasks.indexOf(task),1);
}


addbutton.addEventListener("click",function()
{
    const task=inputbox.value.trim();
    if(task==="")
    {
        alert("You must enter a task");
    }
    else if(tasks.includes(task))
    {
    alert("This task is already added");
    }
    else{
    tasks.push(task);       //store for future record
    createtask(task);       //function called only when we write something
    }
    //after creating task restore to original 
    inputbox.value="";
})

