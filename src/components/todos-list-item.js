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
 				<button>save</button>
 			    <button onClick={this.cancelClick.bind(this)}>Cancel</button>
 			    </td>
 			);	
 		}
 		return(
 			<td>
 			<button  onClick={this.onEditClick.bind(this)}>Edit</button>
 			<button>Delete</button>
 			</td>
 			);

 	}

 	render(){
 		return(
 			<tr>
 				<td>{this.props.task}</td>
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

 }