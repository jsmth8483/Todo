class TodoList {
	addTodo() {
		const input = document.querySelector('.todo-input input');
		if (input.value !== '') {
			const newTodo = new Todo(input.value);
			this.displayNewTodo(newTodo);
		}
		input.value = '';
	}
	displayNewTodo(todo) {
		const todoItem = todo.createNewTodo();
		const listDiv = document.querySelector('.todo-list ul');
		listDiv.append(todoItem);
	}
}

class Todo {
	constructor(text) {
		this._text = text;
		this._completed = false;
	}
	createNewTodo() {
		const todoListItem = document.createElement('li');

		const todoCheckbox = document.createElement('input');
		todoCheckbox.type = 'checkbox';
		todoCheckbox.checked = this.completed;
		todoCheckbox.addEventListener('click', (e) => {
			const todoItemTitle = e.target.parentElement.querySelector('span');
			if (this.completed === false) {
				this.completed = true;
				todoItemTitle.style = 'text-decoration: line-through';
			} else {
				this.completed = false;
				todoItemTitle.style = '';
			}
		});
		todoCheckbox.classList.add('check');

		const todoTitle = document.createElement('span');
		todoTitle.textContent = this.text;

		const removeBtn = document.createElement('button');
		removeBtn.classList.add('remove-item');
		removeBtn.addEventListener('click', (e) => {
			const li = e.target.parentElement;
			e.target.parentElement.parentElement.removeChild(li);
			console.log(e.target.parentElement);
		});
		removeBtn.textContent = 'X';

		todoListItem.append(todoCheckbox, todoTitle, removeBtn);

		return todoListItem;
	}
	get text() {
		return this._text;
	}
	set text(newText) {
		this.text = newText;
	}
	get completed() {
		return this._completed;
	}
	set completed(isCompleted) {
		this._completed = isCompleted;
	}
}

const todoList = new TodoList();
const addButton = document.querySelector('.todo-input button');
addButton.addEventListener('click', (e) => {
	e.preventDefault();
	todoList.addTodo();
});
