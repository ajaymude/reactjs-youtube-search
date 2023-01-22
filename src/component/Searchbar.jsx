
import React, { Component } from 'react'

export class Searchbar extends Component {
    state={
        term:''
    }

    onInputChange =(e)=>{
        this.setState({term:e.target.value})
    }
    onFormSubmit = (e) =>{
        e.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }
  

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
            <div className='form-group'>
                <input type='search'
                placeholder=' search what you want'
                 className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                 />
            </div>
        </form>
      </>
    )
  }
}

export default Searchbar