import React, {Component} from 'react'
import Breadcrumb from './../Breadcrumb'
import Footer from './../Footer'

import {withRouter} from "react-router-dom";
import axios from 'axios'

import * as util from './../../config'

class Edit extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: {
				brand: '',
				thumb: ''
			},
			id: this.props.match.params.id
		}
		this.getData = this.getData.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.simpan = this.simpan.bind(this)
	}

	componentDidMount(){
		let self = this
		this.getData()
			.then(res => {
				this.setState({data: res})
			})
	}

	getData(id){
		let self = this
		return new Promise((resolve) => {
			setTimeout(function() {
				util.http.get(`${util.base_url}/brand/${self.state.id}`)
					.then(res => {
						resolve(res.data)
					})
			}, 500);
		})
	}


	simpan(event){
		event.preventDefault()
		let self = this.state
		util.http.put(`${util.base_url}/brand/${self.id}`, self.data).then(res => {
			this.refs.Form.reset()
			this.props.history.push("/brand");
		})

	}

	handleChange(event){
		let dt = Object.assign(this.state.data, {
			[event.target.name]: event.target.value
		})
		this.setState({data: dt})
	}

	render(){
		var data = this.state.data
		return (
			<div className="row-fluid">
				<div className="widget-content">            
					<form className="form-horizontal" ref="Form" onSubmit={this.simpan}>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="brand">Brand</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text"
									id="brand"
									name="brand"
									ref="brand"
									value={data.brand}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="thumb">Gambar</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text" 
									id="thumb"
									name="thumb"
									value={data.thumb}
									onChange={this.handleChange}
								/>
							</div>
						</div>

						<button 
							className="btn btn-default pull-right"
							>Simpan</button>
					</form>
				</div>	
			</div>
			)
	}
}

export default withRouter(Edit)