import React from 'react'
import {NavLink, withRouter} from "react-router-dom"

export default class Breadcrumb extends React.Component{
	render(){
		return (
				<ul className="breadcrumb">
					<li><NavLink to="/">Home</NavLink></li>
					
				</ul>
			)
	}
}
//<-- <li className="active">Page</li> -->