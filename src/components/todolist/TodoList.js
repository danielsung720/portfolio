import React, { Component } from 'react';
import Todo from './Todo';
import '../../scss/todolist.scss'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todoText: '',
            todoId: 1,
            filter: 'all',
            countCompleted: 0
        }
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.markTodo = this.markTodo.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }

    componentDidMount() {
        const todoData = window.localStorage.getItem('todoapp');
        // 因為型態是string，所以判斷長度>2
        if (todoData) {
            if (todoData.length > 2) {
                const oldTodos = JSON.parse(todoData);
                this.setState({
                    todos: oldTodos,
                    todoId: oldTodos[oldTodos.length - 1].id + 1
                })
            }

            let num = 0;
            JSON.parse(todoData).map(todo => {
                if (todo.isCompleted === true) {
                    num++;
                }
                return num
            })
            this.setState({ countCompleted: num });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            window.localStorage.setItem(
                'todoapp', JSON.stringify(this.state.todos)
            )
        }
    }

    handleChange(e) {
        this.setState({
            todoText: e.target.value
        })
    }

    addTodo() {
        if (!document.getElementsByTagName('input')[0].value) {
            return alert('請輸入項目!');
        }
        const { todoText, todos } = this.state
        this.setState({
            todos: [...todos, {
                id: this.state.todoId,
                isCompleted: false,
                text: todoText
            }],
            todoText: '',
            todoId: this.state.todoId + 1,
        })
        document.getElementsByTagName('input')[0].value = '';
    }

    deleteTodo(id) {
        this.deleteCountCompleted(id);
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    markTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) {
                    return todo
                }
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                }
            }),
        })
        this.handleCountCompleted(id);
    }

    changeFilter() {
        this.state.filter === 'all' ?
            this.setState({ filter: 'completed' }) :
            this.setState({ filter: 'all' })
    }

    handleCountCompleted(id) {
        this.state.todos.map(todo => {
            if (todo.id === id) {
                if (todo.isCompleted === false) {
                    this.setState({ countCompleted: this.state.countCompleted + 1 })
                } else {
                    this.setState({ countCompleted: this.state.countCompleted - 1 })
                }
            }
            return id
        })
    }

    deleteCountCompleted(id) {
        this.state.todos.map(todo => {
            if (todo.id === id) {
                if (todo.isCompleted === true) {
                    this.setState({ countCompleted: this.state.countCompleted - 1 })
                } 
            }
            return id
        })
    }

    render() {
        return (
            <div className="todoWrapper">
                <div className="title">
                    <h1>TodoList</h1>
                </div>
                <div className="addBar">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <input type="text" placeholder="請輸入待處理事項" onChange={this.handleChange} />
                        <button
                            className="add-todo"
                            onClick={this.addTodo}
                        >
                            新增
                            </button>
                    </form>
                </div>
                <div className="filters">
                    <span
                        className={this.state.filter === 'all' ? 'selected' : null}
                        onClick={this.changeFilter}
                    >
                        全部
                        </span>
                    <span
                        className={this.state.filter === 'completed' ? 'selected' : null}
                        onClick={this.changeFilter}
                    >
                        已完成
                        </span>
                </div>
                <div className="list">
                    {this.state.todos.filter(todo =>
                        this.state.filter === 'completed'
                            ? todo.isCompleted
                            : true
                    )
                        .map((todo) =>
                            <Todo
                                key={todo.id}
                                todo={todo}
                                deleteTodo={this.deleteTodo}
                                markTodo={this.markTodo}
                            />
                        )}
                    {this.state.filter === 'completed' && this.state.countCompleted === 0
                        ? <div className="no_completed">目前沒有已完成事項</div>
                        : null}
                </div>
            </div>
        )
    }
}

export default TodoList;