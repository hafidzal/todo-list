import React from "react";
import {  Row, Col, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


class AddTodo extends React.Component{  
    render() {
        return(
            <>
                <Row>
                    <Col>
                        <Form>
                        <FormGroup>
                            <Input 
                                type="text" 
                                name="currentTodoItem" 
                                id="currentTodoItem"
                                placeholder="What you want to do?"
                                value={this.props.currentTodoList.todoItem} 
                                onChange={this.props.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label>Due Date</Label>
                        <DatePicker
                            className="ml-3"
                            size="sm"
                            selected={this.props.dueDate}
                            onChange={this.props.handleStartDateChange}
                            placeholderText="Due Date"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button color="info" onClick={this.props.addTodoList}>Submit</Button>
                        </FormGroup>
                        </Form>
                    </Col>
                    </Row>
            </>
        );
    }
}

// const mapStateToProps = (store) => ({
//     todoItems: store.todoItems.todoItems,
//     dataTodoItems: store.todoItems.dataTodoItems
// });

// const mapDispatchToProps = {
//     getTodoItem
// };

export default connect(
    null,
    null
)(AddTodo);