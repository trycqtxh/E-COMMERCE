import React from 'react'
import {NavLink} from "react-router-dom"

export default class Navbar extends React.Component{
	render(){
		return (
			<div className="navbar">
				<div className="navbar-inner">
					<a className="brand" href="#"><span className="first">Ecommerce</span> <span className="second">Anto</span></a>
				</div>
			</div>
			)
	}
}