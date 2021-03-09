import Task from "./models/Task.js"
import TaskService from "./models/TaskService.js"
import {callApi} from "./utils/callapi.js"

const getEle = (id) => document.getElementById(id)

const renderList = (arr) => {
    let contentLi = ""
    arr.forEach((item)=>{
        contentLi += `
            <li>
                <span>${item.textTask}</span>
                <div class="buttons">
                <button class="remove" onclick="deleteToDo(${item.id})">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" onclick="changeStatus(${item.id})">
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
                </div>
            </li>  
        `
        getEle("todo").innerHTML = contentLi
    })
}

const showList = () => {
    callApi("users", "GET", "")
    .then((res)=>{
    console.log(res)
    renderList(res.data)
    })
    .catch((err)=>console.log(err))
}

showList()
getEle("addItem").addEventListener("click", () => {
    const textTask = getEle("newTask").value
    
    const task = new Task(textTask, 'notCompleted')
    callApi("users", "POST", task)
    .then((res)=>{
        
        showList(res)
    })
    .catch((err)=>{console.log(err)})
})

const deleteToDo = (id) => {
    callApi("users/"+id, "DELETE", id)
    .then(()=>showList())
    .catch((err)=>console.log(err))

}

const changeStatus = (id) =>{
    callApi("users", "GET", '')
    .then((res)=>{
        
        // res.data.forEach((item, index)=>{
        //     console.log(item.id, id)
        //     if(item.id === id){
        //         console.log(item.data)
        //         item.status = 'completed'
        //     }
        // })
        
        
        for(let i = 0; i < res.data.length; i++){
            
            if(res.data[i].id == id){
                console.log(res.data[i].status)
                res.data[i].status = 'completed'
                console.log(res.data[i].status)
            } 
        }
    })
    .catch((err)=>console.log(err))
}

window.deleteToDo = deleteToDo
window.changeStatus = changeStatus




