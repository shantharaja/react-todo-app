import React from 'react';


 export default class CreateTodos extends React.Component{
 	render(){
 		return(
 			<form onSubmit={this.handleCreate.bind(this)}>
 			<input type="text" placeholder="enter todos name"  ref="taskName"/>
 			<button>Create</button>
 			</form>
 		);
 	}
 	handleCreate(event){
 		event.preventDefault();
 		this.props.createTasks(this.refs.taskName.value);
 		this.refs.taskName.value ='';
 	}

 }