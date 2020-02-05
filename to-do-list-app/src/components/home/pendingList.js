import React from "react";
import { Container, Row, Col, Button, Input, Badge } from 'reactstrap';
import { connect } from "react-redux";
import moment from 'moment';
import { getTodoItem, deleteTodoItem, completeTodoItem } from '../../redux/actions/todoItems';

class PendingList extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          todoItem: [],
          filteredItems: [],
          completedItems: []
      }
      
      this.deleteTodo = this.deleteTodo.bind(this);
      this.clickCheck = this.clickCheck.bind(this);
      this.completedTodo = this.completedTodo.bind(this);
  };
  
  componentDidMount() {
    this.props.getTodoItem();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.todoItems);
    this.setState({
        filteredItems: nextProps.todoItems
    });
  }

  deleteTodo = (item) => {
    const filteredItems = this.state.filteredItems[0].filter(data => {
            this.props.deleteTodoItem(item);
            return data.date !== item.date;
      });

    this.setState({
        filteredItems: [filteredItems]
      });
  }


  clickCheck = (e) =>{
    let items = this.state.filteredItems[0];
    items.forEach(item => {
        if (item.todoItem === e.target.value)
           item.isChecked =  e.target.checked
     })
    
     this.setState({
        completedItems: [items]
      });

  }

  completedTodo = () => {
    let items = this.state.completedItems[0];
    items.forEach(item => {
        if (item.isChecked === true)
           item.status =  'completed'
     })

    //  console.log('completed: ', items);
     this.props.completeTodoItem(items);

     this.setState({
        filteredItems: [items]
      });
  }

  renderStatus = (status) => {
      if(status === 'pending') {
          return(
            <Badge color="danger">Pending</Badge>
          )
      } else {
        return(
            <Badge color="success">completed</Badge>
          )
      }
  }

  render() {
    //   console.log('CURRENT STATE -> ', this.state);
      if(this.state.filteredItems[0] !== null) {
        return(
            <>
              <ul>
                  {
                      this.state.filteredItems.map((item, i) => (
                          item.map(data => (
                              <div key={data.date}>
                                <Input type="checkbox" 
                                        name={i}
                                        value={data.todoItem}
                                        checked={this.state.check}
                                        onClick={this.clickCheck} />{' '}
                              <li>
                                <Container>
                                <Row>
                                    <Col>{data.todoItem}</Col>
                                    <Col>{this.renderStatus(data.status)}</Col>
                                    <Col>{moment(data.dueDate).format('MMMM Do YYYY, h:mm a')}</Col>
                                    <Col>
                                        <Button onClick={() => this.deleteTodo(data)} className="ml-3">Delete</Button>
                                    </Col>
                                </Row>
                                </Container>
                              </li>
                              <hr />
                              </div>
                          ))
                      ))
                  }
              </ul>
                  <Button color="success" onClick={() => this.completedTodo()}>Complete Selected List</Button>
            </>
          );
      } else {
          return(
              <>
                <h1>Hi! This to-do list application.</h1>
              </>
          )
      }
    }
}

const mapStateToProps = (store) => ({
    todoItems: store.todoItems.todoItems,
    deletedTodoItem: store.todoItems.deletedTodoItem
    // dataTodoItems: store.todoItems.dataTodoItems
});

const mapDispatchToProps = {
    getTodoItem,
    deleteTodoItem,
    completeTodoItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PendingList);