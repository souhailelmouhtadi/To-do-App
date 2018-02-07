import React, { Component } from 'react';
import TodoItem from './todoItem';

class List extends Component {
  constructor(props){
    super();
    this.state = {
      selectedTodos: []
    };

    this.processTodos = this.processTodos.bind(this);
    this.addToList    = this.addToList.bind(this);
    this.toggleTodo   = this.toggleTodo.bind(this);
  }

  render(){
    const afficher = this.state.selectedTodos.length > 0;
    return(
      <div className="liste">
        { afficher ? <button onClick={this.processTodos}>traiter</button> : null }
        Todos: [{this.props.todos.length}]
        { this.showTodos(this.props.todos) }
      </div>
    );
  }

  processTodos(){
    let list = this.state.selectedTodos;
    list.forEach( item => item.done = !item.done );
    this.setState({ selectedTodos: list });
  }

  toggleTodo(todo, index){
    this.props.onTodoToggle(todo, index);
  }

  addToList(index, doAdd){
    let _todo = this.props.todos[index];
    if(doAdd) {
      if(this.state.selectedTodos.indexOf(_todo) === -1){
        this.setState({
          selectedTodos: this.state.selectedTodos.concat(_todo)
        });
      }
    }else{
      let _list = this.state.selectedTodos;
      _list.splice(index, 1);
      this.setState({
        selectedTodos: _list
      });
    }
  }

  showTodos(todos){
    return(
      todos.map((todo, idx) => {
        return(
          <TodoItem item={todo}
                    key={todo.title+''+idx}
                    idx={idx}
                    addToList={this.addToList}
                    toggleTodo={this.toggleTodo}/>
        );
      })
    );
  }
}

export default List;
