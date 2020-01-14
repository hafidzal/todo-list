import React from "react";
import { Button, Badge } from 'reactstrap';
import { connect } from "react-redux";
import { isEqual } from 'lodash';
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
      if(this.state.completeItem[0] !== null) {
        return(
            <>
              <ul>
                  {
                      this.state.completeItem.map(data => (
                        <div key={data.date}>
                        <li>
                            {data.todoItem} {this.renderStatus(data.status)} <Button className="ml-3" onClick={() => this.restoreTodo(data)}>Restore</Button>
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
    completeTodoItem: store.todoItems.completeTodoItem
});
const mapDispatchToProps = {
    getCompletedItem
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Completed);   