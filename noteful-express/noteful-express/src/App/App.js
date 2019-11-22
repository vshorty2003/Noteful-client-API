import React from 'react';
import Header from '../Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home/Home'
import NotePage from '../NotePage/NotePage'
import ApiContext from '../ApiContext'
import config from '../Config'
import addFolder from '../AddFolder/AddFolder'
import addNote from '../AddNote/AddNote'


class App extends React.Component{ 
	constructor(props) {
		super(props);
		this.state = { folders: [], notes: []}
		}
	

	componentDidMount(){
		const notesRes = fetch(`${config.API_ENDPOINT}/api/notes`, {
				method:'GET',
			});
		const foldersRes = fetch(`${config.API_ENDPOINT}/api/folders`, {
				method:'GET',
			});
		
		Promise.all([notesRes, foldersRes])
		.then (responses => Promise.all(responses.map(res => res.json())))

		Promise.all([
			fetch(`${config.API_ENDPOINT}/api/notes`),
			fetch(`${config.API_ENDPOINT}/api/folders`)
		])
		.then (([noteRes, folderRes]) => {
			return Promise.all([
				noteRes.json(),
				folderRes.json(),
				])
		})
		 
		.then(([notes, folders]) => {
			this.setState({ notes, folders })
		})
	}

	handleDeleteNote = noteId => {
    	this.setState({
      	notes: this.state.notes.filter(note => note.id !== noteId)
   	 })
  	}


  	handleAddFolder = newFolder => {
  		const newFolders = this.state.folders.map(fold => 
  			(fold.id === newFolder.id)
  			? newFolder
  			: fold)
  		this.setState({
  			folders:newFolders
  		})
  	};

  	handleAddNote = note => {
  		this.setState({
  			notes: [
  				...this.state.notes,
  				note
  				]
  		})
  	}

	render() { 
		const value = {
			notes: this.state.notes,
			folders: this.state.folders,		
			deleteNote: this.handleDeleteNote,
			addFolder:this.handleAddFolder,
			addNote: this.handleAddNote,
		}
	return (
		<ApiContext.Provider value={value}>
		<Router> 
				<Header />
				<Route 
					exact path="/" 
					component={Home} 
				/>
				<Route
					exact path="/add-folder"
					component={addFolder}
				/>
				<Route 
					exact path="/folder/:activeFolderId"
				 	component = {Home} 
				 />
				 <Route
				 	exact path="/add-note"
				 	component={addNote}
				 />
				<Route 
					exact path="/note/:activeNoteId"
					component = {NotePage}
							/>

		</Router>
	</ApiContext.Provider>)
 }
}

export default App;