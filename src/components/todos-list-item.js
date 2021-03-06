import React from 'react';


 export default class ToDosListItem extends React.Component{

 	constructor(props){
 		super(props);
 		this.state={
 			isEditing:false
 		};
 	}

 	renderActionsSection(){
 		if(this.state.isEditing){
 			return(
 				<td>
 				<button onClick={this.onSaveClick.bind(this)}>save</button>
 			    <button onClick={this.cancelClick.bind(this)}>Cancel</button>
 			    </td>
 			);	
 		}
 		return(
 			<td>
 			<button  onClick={this.onEditClick.bind(this)}>Edit</button>
 			<button onClick={this.props.deleteTask.bind(this,this.props.task)}>Delete</button>
 			</td>
 			);

 	}
 	renderTaskSection(){
 		const { task, isComplete } = this.props;
 		const taskStyle = {
 			color : isComplete ? 'green' : 'red',
 			cursor:'pointer'
 		}

 		if(this.state.isEditing){
 			return(
 				<td>
 					<from onSubmit={this.onSaveClick.bind(this)}>
 					<input type="text" defaultValue={task}  ref="editInput" />

 					</from>
 				</td>
 			);
 		}

 		return(
 		<td style={taskStyle} 
 		 onClick={this.props.toggleTask.bind(this,task)}>
 		{task}
 		</td>
 		);
 	}

 	render(){
 		return(
 			<tr>
 				{this.renderTaskSection()}
 					{this.renderActionsSection()}
 			</tr>
 		);
 	}
 	onEditClick(){
 		this.setState({isEditing:true});
 	}
 	cancelClick(){
 		this.setState({isEditing:false});
 	}

	onSaveClick(event){
		event.preventDefault();

		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		this.props.saveTask(oldTask,newTask);
		this.setState({isEditing : false })
    }
}
