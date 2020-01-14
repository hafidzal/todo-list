import React from "react";
import { Container, Row, Col, Button, Badge } from 'reactstrap';
import { connect } from "react-redux";
import moment from 'moment';
import { getCompletedItem } from '../../redux/actions/todoItems';

class Completed extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          completeItem: []
      }
      
    //   this.restoreTodo = this.restoreTodo.bind(this);
  };
  
  componentDidMount() {
    this.props.getCompletedItem();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        completeItem: nextProps.completedTodoItem
    });
  }

  restoreTodo = (item) => {
    // const filteredItems = this.state.filteredItems[0].filter(data => {
    //         console.log('Keluaran item: ', data, ' date: ', item.date);
    //         this.props.deletedTodoItem(item);
    //         return data.date !== item.date;
    //   });

    // this.setState({
    //     filteredItems: [filteredItems]
    //   });
  }

  renderStatus = (data) => {
    //   console.log('status: ', status);
    if(data.status === 'pending') {
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
    //   console.log('state: ', this.state.completeItem);
      if(this.state.completeItem[0] !== null) {
        return(
            <>
              <ul>
                  {
                      this.state.completeItem.map(data =>(
                        <div key={data.date}>
                        <li>
                            <Container>
                                <Row>
                                    <Col>{data.todoItem}</Col>
                                    <Col>{this.renderStatus(data)}</Col>
                                    <Col>{moment(data.dueDate).format('MMMM Do YYYY, h:mm a')}</Col>
                                    <Col>
                                    <Button className="ml-3" onClick={() => this.restoreTodo(data)}>Restore</Button>
                                    </Col>
                                </Row>
                                </Container>
                        </li>
                        <hr />
                        </div>
                      ))
                  }
              </ul>
            </>
          );
      } else {
          return(
              <>
                <h1>Hi! This completed page.</h1>
              </>
          )
      }
 
    }
}

const mapStateToProps = (store) => ({
    completedTodoItem: store.todoItems.completedTodoItem
});
const mapDispatchToProps = {
    getCompletedItem
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Completed);   