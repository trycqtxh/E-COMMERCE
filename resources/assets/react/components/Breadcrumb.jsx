import React from 'react'

export default class Breadcrumb extends React.Component{

	render(){
		return (
			<aside className="col-md-12 col-xs-12 col-lg-12">
		        <aside className="breadcrumb-item">
		            <ul className="breadcrumb">
		                {this.props.children}
		            </ul>
		        </aside>
		    </aside>
			)
	}
}