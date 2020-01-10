import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import Loadable from "react-loadable";

import Nav from "../components/nav/index";

class MainRoutes extends Component {
	render() {
		return (
			<>  
                <div>
                    <div>
                        <Nav />
                        <Switch>
                            <Route path={`/`} exact component={home} />
                            <Route path={`/completed`} component={completed} />
                            <Route path={`/trash`} component={trash} />
                            <Route path={`/create-edit`} exact component={createEdit}/>
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
			</>
		);
	}
}

export default MainRoutes

// const mapStateToProps = (state) => ({ token: state.auth.token, me:state.auth.me, roleAcces:state.auth.roleAcces });

// export default withRouter(connect(mapStateToProps)(IndexRouter));

const NotFound = Loadable({
	loader: () => import('../views/not-found'),
	loading: () => <div>Loading...</div>,
})
const home = Loadable({
	loader: () => import('../views/home'),
	loading: () => <div></div>,
})
const completed = Loadable({
	loader: () => import('../views/completed'),
	loading: () => <div></div>,
})
const trash = Loadable({
	loader: () => import('../views/trash'),
	loading: () => <div></div>,
})
const createEdit = Loadable({
	loader: () => import('../views/create-edit'),
	loading: () => <div></div>,
})