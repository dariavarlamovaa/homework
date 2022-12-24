/* todo.js */

/**
 * @param {object} data
 */
export function createTodo(data) {
	const newToDo = {
		title: data.todoTitle,
		isCompleted: data.completed,
		icon: data.icon,
		category: data.chosenCategory,
		author: {
		  firstName: data.user.first,
		  lastName: data.user.last
		}
	}
	return newToDo
}