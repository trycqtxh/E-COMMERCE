import React from 'react'
import {Route, HashRouter, NavLink, withRouter, BrowserRouter, Router} from "react-router-dom";
import Breadcrumb from './../Breadcrumb'
import Footer from './../Footer'

import Index from './Index'
import Create from './Create'
import Edit from './Edit'

export default class Brand extends React.Component{
	render(){
		return (
			<div className="content">
				<div className="header">
					<h1 className="page-title">Produk</h1>
				</div>
				<Breadcrumb/>
				<div className="container-fluid">
					<HashRouter>
						<div>
							<Route exact path="/produk" component={Index}/>
							<Route path="/produk/create" component={Create}/>
							<Route path="/produk/:id/edit" component={Edit}/>
						</div>
					</HashRouter>
				</div>

				<Footer />
			</div>
			)
	}
}