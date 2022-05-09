// create task HTML function
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => 
    `<li class="list-group-item" data-task-id = ${id}>
       <div class="card w-10">
         <div class="card-body">
           <h5 class="card-title">${name}</h5>
           <span class="badge ${status === 'To do' ? 'badge-danger' : 'badge-success'}">${status}</span>
           <p class="card-text">${assignedTo}</p>
           <p class="card-text">${description}</p>
           <p class="card-text">${dueDate}</p>
           <button class="btn btn-outline-success done-button mr-1 ${status === "To do" ? "visible" : "invisible"}">Done</button>
           <button type="button" class="btn btn-primary">DELETE</button>
         </div>
       </div>
     </li>`
   ;
   
class TaskManager {

    constructor(currentId) {
        this.tasks = [];
        this.currentId = 0;
    }
    
     addTask(name, description, assignedTo, dueDate) {
        const task = {
        id: this.currentId++,
        name: name ,
        description: description,
        assignedTo: assignedTo,
        dueDate:  dueDate,
        status: "To do",
        }
        this.tasks.push(task)
    }
    render() {
        const tasksHtmlList = [];
        for(let i =0;i < this.tasks.leghth; i++) {
            const task = this.task[i];
            const date = new Date(task.dueDate);
            const formattedDate =;
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, task.status);
            tasksHtmlList.push(taskHtml);
        }
        const tasksHtml = tasksHtmlList.join(\n);
        const tasksList = document.querySelector('#taskList');
        tasksList.innerHTML = tasksList;
        
        
    }
};

const test = new TaskManager("whatever");

test.addTask("Jeff", "take out the trash", "not me", "Nov, 11th" )



console.log(test.tasks);
