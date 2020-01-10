import React from "react";
// import { Card, CardBody, Form, FormInput } from "shards-react";
import { ListGroup, ListGroupItem } from 'reactstrap';

const PendingList = () => (
    <ListGroup flush>
        <ListGroupItem disabled>Task #1</ListGroupItem>
        <ListGroupItem disabled>Task #2</ListGroupItem>
        <ListGroupItem disabled>Task #3</ListGroupItem>
    </ListGroup>
);

export default PendingList;
