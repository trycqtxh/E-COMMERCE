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
				kategori: '',
			}
		}
		this.handleChange = this.handleChange.bind(this)
		this.simpan = this.simpan.bind(this)
	}

	simpan(event){
		event.preventDefault()
		util.http.post(`${util.base_url}/kategori`, this.state.data).then(res => {
			this.props.history.push("/kategori");
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
							<label className="control-label col-md-2" htmlFor="kategori">Kategori</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text"
									id="kategori"
									name="kategori"
									value={data.kategori}
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