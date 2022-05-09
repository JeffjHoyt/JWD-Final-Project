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
};

// const test = new TaskManager("whatever");

// test.addTask("Jeff", "take out the trash", "not me", "Nov, 11th" )



// console.log(test.tasks);

const createTaskHtml = (name, description, assignedTo, dueDate, status) => `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>
`;

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };

        this.tasks.push(task);
    }

    render() {
        const tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
        
            const task = this.tasks[i];

            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);

            tasksHtmlList.push(taskHtml);
        }

    
        const tasksHtml = tasksHtmlList.join('\n');

        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }
}