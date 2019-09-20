import React, { Component } from 'react';

class Task extends Component {


  render(){
    return(
      <div>
        <p className={this.props.index}>task: {this.props.list}</p>
        <label>Done?</label>
        <input
          className="check"
          type="checkbox"
        />
      </div>
    )
  }
}  

export default Task
