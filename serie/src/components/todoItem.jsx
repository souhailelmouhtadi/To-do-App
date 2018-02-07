import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
  render(){
    const todo = this.props.item;
    const idx  = this.props.idx;
    let str =
      todo.done ? 'marquer à faire' : 'marquer comme fait';

    return(
          <div className="todo" key="todo-{todo.title}">
            <input type="checkbox"
              value={idx}
              onClick={(e) => this.props.addToList(idx, e.target.checked)}/>
            {todo.title}
            <button onClick={() => this.props.toggleTodo(todo, idx)}>
              {str}
            </button>
          </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  idx:  PropTypes.number.isRequired,
  addToList: PropTypes.func,
  toggleTodo: PropTypes.func,
};

export default TodoItem;
