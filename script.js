//selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');


//event Listeners
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteCheck);


//functions
function addToDo(event){
	//prevnet form from submitting
	event.preventDefault();
	//ToDoDiv
	const toDoDiv = document.createElement('div');
	toDoDiv.classList.add('todo');

	//ceate li
	const newToDo = document.createElement('li');
	newToDo.innerText = toDoInput.value;
	newToDo.classList.add('todo-item');
	toDoDiv.appendChild(newToDo);

	//check mark button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>'
	completedButton.classList.add('complete-btn');
	toDoDiv.appendChild(completedButton);

	//trash button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>'
	trashButton.classList.add('trash-btn');
	toDoDiv.appendChild(trashButton);

	//append to list
	toDoList.appendChild(toDoDiv);
	// clear todo input value
	toDoInput.value = '';

}


function deleteCheck (e){
	const item = e.taget;
	//delete
	if( item.classList[0] === 'trash-btn'){
		const todo = item.parentElement;
		todo.classlist.add('fall')
		todo.remove();
	}
	// checkmark
	if (item.classList[0] === 'complete-btn'){
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}





