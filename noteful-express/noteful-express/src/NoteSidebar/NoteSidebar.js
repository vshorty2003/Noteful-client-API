import React from 'react';
import '../Sidebar/Sidebar.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


class NoteSidebar extends React.Component {
	render() {

		if (this.props.activeFolder) {
			return (
				<div className = "sidebar"> 
					<button onClick={() => window.history.back()}>Go Back</button>
					<p>{this.props.activeFolder.name}</p>
				</div>
				) 
			
		}
		return (
		<div className = "sidebar"> 
			<button onClick={() => window.history.back()}>Go Back</button>
		</div>
		) 
	} 

}

export default NoteSidebar