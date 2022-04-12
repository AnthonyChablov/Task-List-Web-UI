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
  
}

// Event Listener Functions
function addTask(e){
  if (taskInput === ''){
    alert('Please add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))
  // create new link element
  const link= document.createElement(a);
  link.className = 'deleteItem secondary-content';
  link.innerHtml = '<i class= "fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);

  // append the li to the ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';


  



  e.preventDefault();
}




