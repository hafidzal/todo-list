import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Link } from "react-router-dom";

const TodoNavbar = () => {
  return (
    <div>
      <Nav>
        <NavItem>
            {/* <Link to="/">Home</Link> */}
            <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
            {/* <Link to="/completed">Completed</Link> */}
            <NavLink href="/completed">Completed</NavLink>
        </NavItem>
        <NavItem>
            {/* <Link to="/trash">Trash</Link> */}
            <NavLink href="/trash">Trash</NavLink>
        </NavItem>
        <NavItem>
            {/* <Link to="/create-edit">Create and Edit</Link> */}
            <NavLink href="/create-edit">Create and Edit</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
}

export default TodoNavbar;