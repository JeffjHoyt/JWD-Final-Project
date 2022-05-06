const newTaskForm = document.querySelector('#newTaskForm');
 
newTaskForm.addEventListener(submit, (event) => {
   event.preventDefault()
 
 
//Select inputs
   const newTaskName = document.querySelector('#newTaskName');
   const newTaskDescription = document.querySelector('#newTaskDescription');
   const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
   const newTaskDueDate = document.querySelector('#newTaskDueDate');
});
 
 
 
function eventHandler(event) {
       if (event.type == 'submit')&&(validate = true) {
          
       }
}
 
//Task 7 add event listener to task list (Anthony Stallings)
const tasksList = document.querySelector('#tasksList');
 
tasksList.addEventListener('click', (event) => {
 
   if (event.target.classlist.contains('delete-button')) {
       const parentTask = event.target.parentElement.parentElement;
      
       //task 7 update the status of selected task to done (Anthony Stallings)
 
       const taskId = Number(parentTask.dataset.taskId);
       const task = taskManager.getTaskById(taskId);
 
       taskManager.deleteTask(taskId);
       taskManager.save();
       task.status = 'DONE';
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
 
 
