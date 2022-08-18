const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

// genrating html for todo
const generateTemplate = (todo) => {
	const html = `	
            <li class="list-group-item d-flex justify-content-between align-items-center">
				<span>${todo}</span>
					<i class="far fa-trash-alt delete"></i>
				</li>`;

	list.innerHTML += html;
};

// adding a todo

addForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const todo = addForm.add.value.trim();

	if (todo.length) {
		generateTemplate(todo);
	}
});

// delete todo
list.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});
