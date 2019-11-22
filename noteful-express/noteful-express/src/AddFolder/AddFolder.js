import React from 'react'
import './addFolder.css'
import Sidebar from '../Sidebar/Sidebar'
import ApiContext from '../ApiContext'
import Config from '../Config'
import Form from "../Form/Form"
import PropTypes from 'prop-types'

export default class AddFolder extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value: "Please name your folder"
    }

    this.handleChange = this.handleChange.bind(this);
   
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  

  static contextType = ApiContext;

  handleSubmit(e) {
    e.preventDefault()

    const folder = {
      name: e.target['folder-name'].value
    }

    fetch(`${Config.API_ENDPOINT}/api/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(folder),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(responseData => {
        this.context.newFolder(responseData);
      })
      .then(folder => {
        this.context.addFolder(folder)
        this.props.history.push(`/`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <section className='AddFolder'>
        <h2>Create a folder</h2>
        <Form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='folder-name-input'>
              Name
            </label>
            <input value={this.state.value}
             onChange={this.handleChange}
              type='text' 
              id='folder-name-input'
               name='folder-name' required/>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add folder
            </button>
          </div>
        </Form>
      </section>
    )
  }
}


AddFolder.defaultProps = {
  history: PropTypes.Object,
}