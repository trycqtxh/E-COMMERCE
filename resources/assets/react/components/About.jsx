import React from 'react'

export default class About extends React.Component{
	componentDidMount() {
		document.title = "About US ";
	}
	render(){
		return (
			<div id="about" className="panel">
				<div className="panel-heading">
					<h3 className="title-heading">About Ecommerce</h3>
				</div>
				<div className="panel-body">
					<p>Hello</p>
				</div>
			</div>
			)
	}
}