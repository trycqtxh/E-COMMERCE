import React from 'react'
import {Route,HashRouter, Router} from "react-router-dom";

import Index from './Index.jsx'
import Brand from './brand/App.jsx'
import Kategori from './kategori/App.jsx'
import Produk from './produk/App.jsx'
import Setting from './setting/'

import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

export default class App extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<HashRouter>
				<div>
					<Navbar/>
					<Sidebar/>

					<Route exact path="/" component={Index}/>
					<Route path="/brand" component={Brand}/>
					<Route path="/kategori" component={Kategori}/>
					<Route path="/produk" component={Produk}/>
					<Route path="/setting" component={Setting}/>
				</div>
		    </HashRouter>
		)
	}
}