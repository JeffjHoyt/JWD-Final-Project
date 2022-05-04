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

const test = new TaskManager("whatever");

test.addTask("Jeff", "take out the trash", "not me", "Nov, 11th" )



console.log(test.tasks);
