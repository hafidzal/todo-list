import React from "react";
import { Container, Row, Col, Button, Badge } from 'reactstrap';
import { connect } from "react-redux";
import moment from 'moment';
import { getDeletedItem } from '../../redux/actions/todoItems';

class Trash extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          trashItem: []
      }
      
    //   this.restoreTodo = this.restoreTodo.bind(this);
  };
  
  componentDidMount() {
    this.props.getDeletedItem();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        trashItem: nextProps.deletedTodoItem
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
      // console.log('TRASH ITEM ', this.state.trashItem);
      if(this.state.trashItem[0] !== null) {
        return(
            <>
              <ul>
                  {
                      this.state.trashItem.map(data => (
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
                            {/* {data.todoItem} {this.renderStatus(data.status)} <Button className="ml-3" onClick={() => this.restoreTodo(data)}>Restore</Button> */}
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
                <h1>Hi! This trash page.</h1>
              </>
          )
      }
 
    }
}

const mapStateToProps = (store) => ({
    deletedTodoItem: store.todoItems.deletedTodoItem
});
const mapDispatchToProps = {
  getDeletedItem
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trash);