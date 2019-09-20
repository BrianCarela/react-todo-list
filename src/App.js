import React, {Component} from 'react';
import './App.css';
import Form from './components/Form.js'
import Task from './components/Task.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: ["do the dishes", "do laundry", "change bed sheets"]
    }
  }

  renderTasks(){
    return this.state.tasks.map( (task, index) => {
      return <Task list={task} key={index} index={index}/>
    })
  }

  newTask(newChore){
    let newList = this.state.tasks
    newList.push(newChore)
    this.setState({
      tasks: newList
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Todo List</h1>
        <h3>Create New Todo item</h3>
        <Form new={this.newTask.bind(this)}/>
        {this.renderTasks()}
      </div>
    );
  }
}

export default App;
