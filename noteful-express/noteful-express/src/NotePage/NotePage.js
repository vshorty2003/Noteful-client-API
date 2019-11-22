import React, {Component} from 'react';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import NoteDetail from '../NoteDetail/NoteDetail'
import NoteSidebar from '../NoteSidebar/NoteSidebar'
import ApiContext from '../ApiContext'

class NotePage extends React.Component{ 
	static contextType = ApiContext

	findNote(notes, noteId){
		//notes.find((note) => note.id === noteId)
		var i;
		for(i = 0; i < notes.length; i++) {
			if (notes[i].id == noteId) {
				return notes[i];
			}
		}
	}


	findFolder(folders, folderId){
		var i;
		for(i = 0; i < folders.length; i++) {
			if (folders[i].id == folderId) {
				return folders[i];
			}
		}
	}

	render() { 
		//<ApiContext.Provider>
			const { notes, folders } = this.context
			const { activeNoteId } = this.props.match.params
			const note = this.findNote(notes, activeNoteId) || {}
			const activeFolder = this.findFolder(folders, note.folderId)
			return (
				<div> 
					<NoteSidebar activeFolder={activeFolder} />
					<NoteDetail
					 	activeNote={note}
					 	 />
					 	
					 	}
				</div>
		//</ApiContext.Provider>
		)
		}
	}

export default NotePage;