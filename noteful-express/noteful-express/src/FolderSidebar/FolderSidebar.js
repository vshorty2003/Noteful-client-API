import React from 'react';
import { NavLink } from 'react-router-dom';
import FolderError from '../folder-error'


export default function FolderSidebar(props) {
	var folders = this.context
	return (
		<div>
		<FolderError>
			{folders}
		</FolderError>
		</div>
	);
}