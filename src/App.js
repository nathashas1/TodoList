import React from 'react';
import Doing from './doing.js';
import Done from './done.js';
import Todo from './todo.js';
import './App.css';
// import update from 'immutability-helper';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      allTodos:[],
      showForm: false,
      newTodo: ""
     }
     this.handleClick = this.handleClick.bind(this)
     this.handleChange = this.handleChange.bind(this)
     this.changeState = this.changeState.bind(this)
  }

  componentDidMount(){

    }

    handleClick() {

        if (this.state.showForm === false) {
          this.setState({showForm: true})
        } else {
          this.setState({showForm: false})
          let newTodo = {id: this.state.allTodos.length,text: this.state.newTodo, state: "todo"}
          this.setState({ allTodos: [...this.state.allTodos, newTodo] })
        }
    }


    handleChange(e) {
      let newTodo = e.target.value
      this.setState({newTodo})
    }

    changeState(side,container,id){

      let todo = this.state.allTodos[id]
        if (container === "doing") {
          if (side === "left") {


          }
        } else if (container === "todo") {
            todo.state = "doing"
            let updatedTodo = this.state.allTodos.splice(id, 1, todo)
            console.log("updatedTodo",updatedTodo,this.state.allTodos)
            // let updatedTodo = update(this.state.allTodos, {$splice: [[id, 1, todo]]});
            this.setState({allTodos: updatedTodo})
          }
    }



    render() {
      return (
        <div className="app">
          {this.state.showForm ? <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
          /> : null}
          <div className="" onClick={this.handleClick}>Add Card</div>
          <Todo allTodos={this.state.allTodos}
                changeState={this.changeState}
            />
          <Doing allTodos={this.state.allTodos}
            changeState={this.changeState}/>
          <Done allTodos={this.state.allTodos}
            changeState={this.changeState}
            />
        </div>
      )
    }

  }

    export default App;
