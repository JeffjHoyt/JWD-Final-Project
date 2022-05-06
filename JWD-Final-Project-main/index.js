const newTaskForm 

addEventListener(submit) {

}

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