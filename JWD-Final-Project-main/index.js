// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

// Select the New Task Form
const newTaskForm = document.querySelector('#TaskList')

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) =>  {
    event.preventDafault();
)};

function eventHandler(event) {
        if (event.type == 'submit')&&(validate = true) {
            
        } else {
    }
}

const taskHtml = createTaskHtml(1, "Trash take out", "take out the trash", "michael", "05/05/2022", "pass a value");
console.log(taskHtml);