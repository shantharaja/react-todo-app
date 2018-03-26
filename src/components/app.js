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
 				<CreateTodos createTasks={this.createTasks.bind(this)}/>
 				<ToDosList todos={this.state.todos}/>
 			</div>
 		);
 	}
 	createTasks(task){
 		this.state.todos.push({
 			task,
 			isComplete:false
 		});
 		this.setState({todos:this.state.todos});

 	}

 }