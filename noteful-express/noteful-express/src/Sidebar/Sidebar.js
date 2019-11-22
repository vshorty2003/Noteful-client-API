import React from 'react';
import './Sidebar.css'
import FolderSidebar from '../FolderSidebar/FolderSidebar'
import Button from '../Button/Button'
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import FolderError from '../folder-error'



class Sidebar extends React.Component {
	folderHTML(folder) {
		var folderLink = "/folder/" + folder.id
		var classname = "folder";
		if (folder.id === this.props.activeFolder) {
			classname = "folder-highlight " + classname;
		} 
		return (<NavLink to={folderLink}><div id={folder.id} className={classname}> {folder.fullname} </div></NavLink>)
	}

	render() {
		if (this.props.folders) {
			var folders = this.props.folders.map((folder) => this.folderHTML(folder))
			return(
				<div className="sidebar">
					<div className="folderdisplay">
						<FolderError>
							{folders}
						</FolderError>
					</div>
								        
			          <Button
			            tag={Link}
			            to='/add-folder'
			            type='button'
			            className='add-folder-button'>
			            Add Folder 
			            </Button>
			           
				</div>
				)
		}
		return (
		<></>
		)
	}

}

Sidebar.propTypes = {
	folders: PropTypes.array,
	activeFolder: PropTypes.string
}

export default Sidebar;

