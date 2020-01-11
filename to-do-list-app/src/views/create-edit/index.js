import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { connect } from "react-redux";

import InputTodo from "../../components/common/Input";
import { addTodoItem } from '../../redux/actions/todoItems';

class CreateEdit extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          isLoading:false,
          isButtonDisabled: false,
          todoItem: '',
      }
      
      this.click = this.click.bind(this);
  };
  
  handleChange = (event) => {
    const input = event.target;
    const value = input.value;
 
    this.setState({ [input.name]: value });
  };

  click = () => {
    const { todoItem } = this.state;
    this.props.addTodoItem(todoItem);
    // localStorage.setItem('todoItem', todoItem);
    // localStorage.setItem('user', rememberMe ? user : '');
  }

  render() {
      return(
          <>
            <Container>
                <Row>
                  <Col>
                    <Form onSubmit={this.click}>
                      {/* <InputTodo value={this.state.todo} change={this.handleChange} /> */}
                      <FormGroup>
                          <Input 
                              type="text" 
                              name="todoItem" 
                              id="todoItem"
                              placeholder="What you want to do?"
                              value={this.state.todo} 
                              onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="dueDate">Due Date</Label>
                        <Input
                          type="date"
                          name="dueDate"
                          id="dueDate"
                          placeholder="due date"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button color="info">Submit</Button>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
            </Container>
          </>
      );
  }
}

// export default CreateEdit

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