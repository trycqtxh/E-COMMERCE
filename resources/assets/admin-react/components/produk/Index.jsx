import React, {Component} from 'react'
import {NavLink, withRouter} from "react-router-dom"
import PropTypes from "prop-types"

import * as util from './../../config'

class Index extends Component{
	constructor(props, context){
		super(props, context)

		this.state = {
			list: [],
		}

		this.getData = this.getData.bind(this)
	}

	componentDidMount(){
		document.title = "Produk ";
		this.getData().then(res => {
			this.setState({list: res.data})
		})
	}

	getData(){
		return new Promise((resolve) => {
			setTimeout(function() {
				util.http.get(`${util.base_url}/produk`)
					.then(res => {
						resolve(res.data)
					})
			}, 100);
		})
	}

	handleEdit(id){
		this.props.history.push(`/produk/${id}/edit`);
	}

	handleHapus(id){
		util.swal({
			title: "Apakah anda yakin menghapus Data Ini ?",
			text: "Data yang terhapus Selamanya",
			type: "warning",
			showCancelButton: true,
		}).then(result => {
			if (result.value) {
				util.http.delete(`/produk/${id}`)
					.then(() => {
						this.getData()
							.then(res => {
								this.setState({list: res.data})
							})
					})
			}
		})
	}

	render(){
		let list = this.state.list
		return (
			<div className="row-fluid">
				<NavLink to="/produk/create" className="btn btn-primary pull-right"><i className="icon-plus"></i> Konten Baru</NavLink>
				<br/>
				<br/>
				<br/>
				<div className="widget-content">            
					<table className="table table-striped table-bordered">
					<thead>
						<tr>                       
							<th>produk</th>                  
							<th>#</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.list.map((val, idx) => {
								return (
									<tr key={idx}>                                        
										<td>{val.produk}</td>
										<td className="actions">
											<a onClick={this.handleEdit.bind(this, val.id)} className="btn btn-default btn-sm"><i className="fa fa-pencil"></i></a>
											<a onClick={this.handleHapus.bind(this, val.id)} className="btn btn-default btn-sm"><i className="fa fa-trash"></i></a>
										</td>
									</tr>
								)
							})
						}
					</tbody>
					</table>
				</div>	
			</div>
			)
	}
}

export default withRouter(Index)