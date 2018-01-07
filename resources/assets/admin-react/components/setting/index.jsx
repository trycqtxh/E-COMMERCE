import React from 'react'
import {Route, HashRouter, NavLink, withRouter, BrowserRouter, Router} from "react-router-dom";
import Breadcrumb from './../Breadcrumb'
import Footer from './../Footer'

export default class Setting extends React.Component{
	constructor(props, context){
		super(props, context)

		this.state = {
			nama_aplikasi: '',
			deskripsi: '',
			no_whatsapp: '',
			no_sms: '',
			link_facebook: '',
			link_twitter: '',
			link_instagram: ''
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		this.setState({[event.target.name]:event.target.value})
	}

	handelSubmit(){

	}

	render(){
		return (
			<div className="content">
				<div className="header">
					<h1 className="page-title">Setting Web</h1>
				</div>
				<Breadcrumb/>
				<div className="container-fluid">
					<div className="panel">
						<div className="panel-heading">
							<h3>Basic Info</h3>
						</div>
						<div className="panel-body">
							<form className="form-horizontal" onSubmit={this.handelSubmit.bind(this)}>
								<div className="form-group form-group-sm">
									<label className="control-label col-md-3">Nama Aplikasi</label>
									<div className="col-md-9">
										<input 
											type="text"
											name="nama_aplikasi"
											className="form-control"
											onChange={this.handleChange}
											value={this.nama_aplikasi}
										/>
									</div>
								</div>
								<div className="form-group form-group-sm">
									<label className="control-label col-md-3">No Whatsapp</label>
									<div className="col-md-9">
										<input 
											type="text"
											name="no_whatsapp"
											className="form-control"
											onChange={this.handleChange}
											value={this.no_whatsapp}
										/>
									</div>
								</div>
								<div className="form-group form-group-sm">
									<label className="control-label col-md-3">No SMS</label>
									<div className="col-md-9">
										<input 
											type="text"
											name="no_sms"
											className="form-control"
											onChange={this.handleChange}
											value={this.no_sms}
										/>
									</div>
								</div>
								<div className="form-group form-group-sm">
									<label className="control-label col-md-3">Deskripsi Aplikasi</label>
									<div className="col-md-9">
										<textarea 
											name="deskripsi"
											className="form-control"
											onChange={this.handleChange}
											value={this.deskripsi}
										/>
									</div>
								</div>
								<hr/>
								<div className="form-group form-group-sm">
									<label className="control-label col-md-3">Facebook</label>
									<div className="col-md-9">
										<input 
											type="text"
											name="link_facebook"
											className="form-control"
											onChange={this.handleChange}
											value={this.link_facebook}
											placeholder="http://facebook.com/"
										/>
									</div>
								</div>
								<div className="form-group form-group-sm">
									<label className="control-label col-md-3">Twitter</label>
									<div className="col-md-9">
										<input 
											type="text"
											name="link_twitter"
											className="form-control"
											placeholder="http://twitter.com/"
											onChange={this.handleChange}
											value={this.link_twitter}
										/>
									</div>
								</div>
								<div className="form-group form-group-sm">
									<label className="control-label col-md-3">Instagram</label>
									<div className="col-md-9">
										<input 
											type="text"
											name="link_instagram"
											className="form-control"
											placeholder="http://instagram.com/"
											onChange={this.handleChange}
											value={this.link_instagram}
										/>
									</div>
								</div>
								<button className="btn btn-default pull-right"> Simpan</button>
							</form>
						</div>
					</div>
				</div>
				<Footer />
			</div>
			)
	}
}