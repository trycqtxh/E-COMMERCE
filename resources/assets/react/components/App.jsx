import React from 'react'
import {Route,HashRouter} from "react-router-dom";

import Home from './Index.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import ProductDetail from './ProductDetail.jsx'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default class App extends React.Component{
	constructor(props){
		super(props)
	}

	location(){
		return {
			form: '/'
		}
	}

	render(){
		return (
			<HashRouter>
				<div>
					<Header/>
					<section id="main-page" className="container">
						<Route exact path="/" component={Home}/>
						<Route path="/about-us" component={About}/>
						<Route path="/contact-us" component={Contact}/>
						<Route path="/produk/:id" component={ProductDetail}/>
						<Route exact path="/search" component={Home}/>
				    </section>
				    <Footer/>
				</div>
		    </HashRouter>
		)
	}
}