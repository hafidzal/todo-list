import React from "react";
import { Container, Row, Col } from 'reactstrap';
import PendingList from "../../components/home/pendingList";
// import PageTitle from "../components/common/PageTitle";
// import Editor from "../components/add-new-post/Editor";
// import SidebarActions from "../components/add-new-post/SidebarActions";
// import SidebarCategories from "../components/add-new-post/SidebarCategories";

const Home = () => (
  <Container>
    <Row>
      <Col>
        <PendingList />
      </Col>
    </Row>
  </Container>
);

export default Home;
