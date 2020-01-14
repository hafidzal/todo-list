import React from "react";
import { Container } from 'reactstrap';
import { connect } from "react-redux";

import AddTodo from "../../components/createEdit/addTodo";
import { addTodoItem } from '../../redux/actions/todoItems';

class CreateEdit extends React.Component{
  constructor() {
      super();
      this.state = {
          todoList: [],
          startDate: new Date(),
          currentTodoList: { todoItem: '', date: '', status: 'pending', isChecked: false, dueDate: new Date() }
      }

      this.handleStartDateChange = this.handleStartDateChange.bind(this);

  };
  
  handleChange = (e) => {
    const newTodoItem = e.target.value;
    const currentTodoList = { todoItem: newTodoItem, date: Date.now(), status: 'pending', isChecked: false, dueDate: new Date() }

    this.setState({ currentTodoList });
  };

  addTodoList = (e) => {
    e.preventDefault()
    const newTodoList = this.state.currentTodoList
    if(newTodoList.todoItem !== ''){
      const todoList = [...this.state.todoList, newTodoList]
      
      this.props.addTodoItem(todoList);

      this.setState({
        todoList: todoList,
        currentTodoList: { todoItem: '', date: '', status: 'pending', isChecked: false, dueDate: new Date() }
      })
    }
  };

  handleStartDateChange = (value) => {
    this.setState({
       dueDate: new Date(value)
    });
  }

  render() {
      return(
          <>
            <Container>
                <AddTodo 
                  addTodoList={this.addTodoList}
                  handleChange={this.handleChange}
                  currentTodoList={this.state.currentTodoList}
                  handleStartDateChange={this.handleStartDateChange}
                  dueDate={this.state.dueDate}
                />
            </Container>
          </>
      );
  }
}

// const mapStateToProps = (store) => ({
//   isLoading: store.order.isLoading
// });

const mapDispatchToProps = {
  addTodoItem
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateEdit);