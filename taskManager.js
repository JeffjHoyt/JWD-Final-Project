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
           <button class="btn btn-primary delete-button">DELETE</button>
         </div>
       </div>
     </li>`
   ; 


class TaskManager {

    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
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
    
    //task 8 Jeff Hoyt
    
    render() {
        const tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(taskHtml);
        }

        const tasksHtml = tasksHtmlList.join('\n');
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }

    save() {
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        const currentId = String(this.currentId);
        localStorage.setItem('currentId', currentId);
    }

    load() {
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }
    }
}

const test = new TaskManager("whatever");

test.addTask("Jeff", "take out the trash", "not me", "Nov, 11th" )



console.log(test.tasks);

    // creating delete task method
    deleteTask(taskId){
        const newTasks = [];
        //loop over thos.task
        for(let i = 0; i < this.task.length; i++){
            const task = this.tasks[i];
            if(task.id != taskId){
                newTasks.push(task);
            } 
        }
    }
};

/* const test = new TaskManager("whatever");
test.addTask("Jeff", "take out the trash", "not me", "Nov, 11th" )
console.log(test.tasks);
 */
