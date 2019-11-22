import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import ApiContext from '../ApiContext'
import PropTypes from 'prop-types'
import NotesError from '../notes-error'
import FolderError from '../folder-error'

class Home extends React.Component{ 
	static contextType = ApiContext


	render() { 
		var activeFolder = this.props;
		if (this.props.match) {
			activeFolder = this.props.match.params.activeFolderId;
		}
		return (

			<div> 
				<FolderError>
					<Sidebar folders={this.context.folders} activeFolder={activeFolder}/>
				</FolderError>
				<NotesError>
					<Main activeFolder={activeFolder}/>
				</NotesError>
			</div>)
	}
}

export default Home;
