import React from 'react'

import Breadcrumb from './Breadcrumb'
import Footer from './Footer'

export default class Index extends React.Component{
	render(){
		return (
			<div className="content">
				<div className="header">
					<h1 className="page-title">Home</h1>
				</div>
				<Breadcrumb/>
				<div className="container-fluid">
					<div className="row-fluid">
						<div className="col-md-3">
							<div className="block">
								<i className="fa fa-tag"></i>
								<h3>Brand</h3>
							</div>
						</div>
						<div className="col-md-3">
							<div className="block">
								<i className="fa fa-home"></i>
								<h3>Kategori</h3>
							</div>
						</div>
						<div className="col-md-3">
							<div className="block">
								<i className="fa fa-home"></i>
								<h3>Produk</h3>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
			)
	}
}