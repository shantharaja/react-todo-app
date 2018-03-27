
import React from 'react';
import ToDosList from './todos-list';
import CreateTodos from './create-todo';
const todos=[
{
	task:"first task",
	isComplete:false
},
{
	task:'second task',
	isComplete:true
}
]
 export default class App extends React.Component{

 	constructor(props){
 		super(props);
 		this.state={
 			todos
 		}
 	}

 	render(){
 		return(
 			<div>
 				<h1>React ToDos App</h1>
 				<CreateTodos todos={this.state.todos} createTasks={this.createTasks.bind(this)}/>
 				<ToDosList todos={this.state.todos}
 							toggleTask={this.toggleTask.bind(this)}
 							saveTask = {this.saveTask.bind(this)}
 							deleteTask = {this.deleteTask.bind(this)}
 				/>
 			</div>
 		);
 	}

 	toggleTask(task){
 		console.log("Task :::  "+task);
 		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
 		console.log("foundTodo  :::::::::  "+foundTodo);
 		foundTodo.isComplete = !foundTodo.isComplete;
 		this.setState({todos : this.state.todos});

 	}
 	createTasks(task){
 		this.state.todos.push({
 			task,
 			isComplete:false
 		});
 		this.setState({todos:this.state.todos});

 	}
 	saveTask(oldTask,newTask){
 		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
 		foundTodo.task  = newTask;
 		this.setState({todos:this.state.todos})
 	}
 	deleteTask(taskToDelete){
 		console.log("taskToDelete  "+taskToDelete);
 		_.remove(this.state.todos, todo => todo.task === taskToDelete);
 		this.setState({todos : this.state.todos});
 	}

 }