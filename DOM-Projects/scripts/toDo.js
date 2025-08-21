//variables
const addBtn=document.getElementById('add-btn');
const taskInput=document.getElementById('task-input');
const getPlaceholder=document.getElementById('task-list');

let appendTask='';
//Add button click
addBtn.addEventListener('click', function(){
   
    //Check the input text is empty or not
    if(taskInput.value.trim() !== "")
    {
         //create html tag
        const li=document.createElement('li');
        li.className='task-item';

        const span=document.createElement('span')
        span.className='task-text';
        span.innerText=taskInput.value;

        const icons=document.createElement('span')
        icons.className='icons';
        icons.innerHTML=` <i class="fas fa-check tick-icon" title="Mark as complete"></i>
                    <i class="fas fa-edit edit-icon" title="Edit task"></i>
                    <i class="fas fa-trash delete-icon" title="Delete task"></i>`;

       //append all the tags 
       li.appendChild(span);
       li.appendChild(icons);
        
        //Append to the main html placeholder tag
        getPlaceholder.appendChild(li);

        //Clear the input text field
        taskInput.value='';
    }
    else
    {
        alert('Please enter the task')
    }
});


// Event delegation for all icons need to attach event listener to the parent element initial when the dom is loaded no li elements
// adding event listener to the parent element will get each child element a listener
getPlaceholder.addEventListener('click', function (e) {
    const target = e.target;
    
    // Mark as complete
    if (target.classList.contains('tick-icon')) {
        const taskText = target.closest('.task-item').querySelector('.task-text');
        taskText.style.textDecoration = 'line-through';
    }

    // Edit task
    if (target.classList.contains('edit-icon')) {
        const taskText = target.closest('.task-item').querySelector('.task-text');
        const newTask = prompt('Edit your task:', taskText.innerText);
        if (newTask !== null && newTask.trim() !== '') {
            taskText.innerText = newTask;
        }
    }

    // Delete task
    if (target.classList.contains('delete-icon')) {
        const taskItem = target.closest('.task-item');
        taskItem.remove();
    }
});
