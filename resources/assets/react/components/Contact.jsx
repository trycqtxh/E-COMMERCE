import React from 'react'

export default class Contact extends React.Component{
	componentDidMount() {
		document.title = "Contact US ";
	}

	render(){
		return (
			<div id="contact" className="panel">
				<div className="panel-heading">
					<h3 className="title-heading">Contact Us</h3>
				</div>
				<div className="panel-body">
					<h4>For Business Inquires</h4>
					<h6>Email us at sales@eccomerce.com</h6>
					<h6>Call us at +62-09090908</h6>
				</div>
			</div>
			)
	}
}