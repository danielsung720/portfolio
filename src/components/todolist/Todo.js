import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.mark = this.mark.bind(this);
    }

    delete() {
        const { todo, deleteTodo } = this.props;
        deleteTodo(todo.id);
    }

    mark() {
        const { todo, markTodo } = this.props;
        markTodo(todo.id);
    }

    render() {
        const { todo } = this.props;
        return (
            <div
                className={`list-item ${todo.isCompleted ? 'completed' : ''}`}
            >
                <div className="list-item_state">
                    {todo.isCompleted ? 'O' : 'X'}
                </div>
                <div className="list-item_content">
                    {todo.text}
                </div>
                <div className="list-item_action">
                    <button
                        className={`${todo.isCompleted ? 'mark_completed' : ''}`}
                        onClick={this.mark}
                    >
                        {todo.isCompleted ? '標示成未完成' : '標示成完成'}
                    </button>
                    <button
                        className={`${todo.isCompleted ? 'mark_completed' : ''}`}
                        onClick={this.delete}
                    >
                        刪除
                    </button>
                </div>
            </div>
        )
    }
}

export default Todo;