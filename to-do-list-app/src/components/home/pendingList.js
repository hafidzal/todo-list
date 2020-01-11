import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from "react-redux";

import { getTodoItem } from '../../redux/actions/todoItems';

class CreateEdit extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          todoItem: []
      }
      
  };
  
  componentDidMount() {
    this.props.getTodoItem();
  }


  render() {
    // console.log('HASIL REDUX: ', this.props.todoItems);
      return(
          <>
            <ListGroup flush>
                <ListGroupItem disabled>{this.props.todoItems}</ListGroupItem>
            </ListGroup>
          </>
      );
  }
}

const mapStateToProps = (store) => ({
    todoItems: store.todoItems.todoItems
});

const mapDispatchToProps = {
    getTodoItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEdit);