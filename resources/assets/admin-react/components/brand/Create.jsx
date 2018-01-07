import React, {Component} from 'react'
import Breadcrumb from './../Breadcrumb'
import Footer from './../Footer'

import {withRouter} from "react-router-dom";
import axios from 'axios'

import * as util from './../../config'

class Create extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: {
				brand: '',
				thumb: ''
			}
		}
		this.handleChange = this.handleChange.bind(this)
		this.simpan = this.simpan.bind(this)
	}

	simpan(event){
		event.preventDefault()
		util.http.post(`${util.base_url}/brand`, this.state.data).then(res => {
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
		let data =  this.state.data
		return (
			<div className="row-fluid">
				<div className="widget-content">            
					<form className="form-horizontal" ref="Form">
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="brand">Brand</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text"
									id="brand"
									name="brand"
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
							onClick={this.simpan}
							>Simpan</button>
					</form>
				</div>	
			</div>
			)
	}
}

export default withRouter(Create)