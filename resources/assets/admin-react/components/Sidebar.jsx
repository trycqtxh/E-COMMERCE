import React from 'react'
import {NavLink, withRouter} from "react-router-dom"
import * as util from './../config/'
// style="{{paddingTop: 5px}}"
export default class Sidebar extends React.Component{
	handleLogout(){
		axios.post('/logout')
			.then(res => {
				if (res.status == 200) {
					window.location = '/login'
				}
			})
	}

	render(){
		return (
			<div className="sidebar-nav">
				<NavLink to="/" className="nav-header"><i className="icon-th-list"></i>Beranda</NavLink>

				<a className="nav-header" ><i className="fa fa-book"></i> Data </a>
				<ul id="content-menu" className="nav nav-list collapse in">                        
					<li><NavLink to="/brand"><i className="fa fa-tag"></i> Brand</NavLink></li>
					<li><NavLink to="/kategori"><i className="fa fa-bookmark"></i> Kategori</NavLink></li>
					<li><NavLink to="/produk"><i className="fa fa-shopping-bag"></i> Produk</NavLink></li>
				</ul>

				<a className="nav-header" ><i className="fa fa-cogs"></i> Setting </a>
				<ul id="content-menu" className="nav nav-list collapse in">                        
					<li><NavLink to="/setting"><i className="fa fa-cog"></i> Setting Web</NavLink></li>
				</ul>
				<a className="nav-header"  onClick={this.handleLogout.bind(this)}><i className="fa fa-sign-out"></i> Logout </a>
			</div>
			)
	}
}