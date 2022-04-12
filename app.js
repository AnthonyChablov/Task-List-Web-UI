// Define UI variables
const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterBtn = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadAllEventListeners();

// Load All Event Listeners
function loadAllEventListeners(){
  // Add Task Event
  taskForm.addEventListener('submit', addTask);
  // Remove Task Event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('', filter);

}

// Event Listener Functions
function addTask(e)
{
  if (taskInput.value === ''){
    alert('Please add a task');
  }
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))
  // Create new link element
  const link= document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class= "fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append the li to the ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Remove task
function removeTask(e){
  if (e.target.parentElement.classList.contains('delete-item'))
  {
    if (confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks()
{
  //tasklist.innerHTML = '';

  // Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  // innerHTML() vs removeChild()
}

// Filter Tasks 
function filterTasks(e){
  const text = e.target.value.toLowerCase(); 
  let item;

  document.querySelectorAll('.collection-item')
    .forEach(() =>{
      item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display= 'block';
      }else{
        task.style.display = 'none';
      }
    });
}


