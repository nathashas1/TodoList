import React from 'react';
import Doing from './doing.js';
// import Done from './done.js';
import Todo from './todo.js';
import './App.css';



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
      console.log("changestae",side,container,id)
      let todo = this.state.allTodos[id]
        if (container === "doing") {
          if (side === "left") {
            todo.state = "todo"
            let updatedTodo = this.state.allTodos
            updatedTodo.splice(id, 1, todo)
            this.setState({allTodos: updatedTodo})
          } else if (side === "right") {
            todo.state = "done"
            let updatedTodo = this.state.allTodos
            updatedTodo.splice(id, 1, todo)
            this.setState({allTodos: updatedTodo})
          }
        } else if (container === "todo") {
            todo.state = "doing"
            let updatedTodo = this.state.allTodos
            updatedTodo.splice(id, 1, todo)
            console.log("updatedTodo",updatedTodo,this.state.allTodos)
            this.setState({allTodos: updatedTodo})
        } else if (container === "done") {
          todo.state = "doing"
          let updatedTodo = this.state.allTodos
          updatedTodo.splice(id, 1, todo)
          this.setState({allTodos: updatedTodo})
        }
    }



    render() {
      // <Done allTodos={this.state.allTodos}
      //   changeState={this.changeState}
      //   />
      return (
        <div className="app">
          <div className="container">
              <Todo allTodos={this.state.allTodos}
                    changeState={this.changeState}
                    showForm={this.state.showForm}
                />
                {this.state.showForm ? <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                /> : null}
              <div className="submitBtn" onClick={this.handleClick}>Add Card</div>
            </div>
          <Doing allTodos={this.state.allTodos}
            changeState={this.changeState}/>

        </div>
      )
    }

  }

    export default App;
