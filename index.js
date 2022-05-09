const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener(submit, (event) => {
    event.preventDefault()
});

function eventHandler(event) {
        if (event.type == 'submit')&&(validate = true) {
            
        } 
}

tasksList.addEventListener('click', (event) => {

    if (event.target.classlist.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
    }
});

    const newTaskNameInput = document.querySelector('#newTaskName');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('errorMessage');

    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

    function validFormFieldInput(data){
    return data !== null && data !== '';
}
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
