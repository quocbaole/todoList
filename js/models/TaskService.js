import { callApi } from "./../utils/callapi.js"

class TaskService{
    getListTask(){
        return callApi("users", "GET", "")
        // .then((res)=>{
        //     console.log(res)
        // })
        // .catch((err)=>console.log(err))
    }
    // addTask(){

    // }
}


export default TaskService