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
				kode: '',
				nama: '',
				harga: '',
				berat: '',
				warna: '',
				keterangan: '',
				brand_id: '',
				kategori_id: '',
			},
			brand: [],
			kategori: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.simpan = this.simpan.bind(this)
		this.getBrand = this.getBrand.bind(this)
		this.getKategori = this.getKategori.bind(this)
	}

	getBrand(){
		return new Promise((resolve) => {
			setTimeout(function() {
				util.http.get(`${util.base_url}/brand`)
					.then(res => {
						resolve(res.data)
					})
			}, 200);
		})
	}

	getKategori(){
		return new Promise((resolve) => {
			setTimeout(function() {
				util.http.get(`${util.base_url}/kategori`)
					.then(res => {
						resolve(res.data)
					})
			}, 200);
		})
	}

	componentDidMount(){
		let self = this
		axios.all([this.getBrand(), this.getKategori()])
			.then(axios.spread(function (brand, kategori) {
				self.setState({brand: brand.data})
				self.setState({kategori: kategori.data})
			}))
	}

	simpan(event){
		event.preventDefault()
		util.http.post(`${util.base_url}/produk`, this.state.data).then(res => {
			this.props.history.push("/produk");
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
		let kategori =  this.state.kategori
		let brand =  this.state.brand
		return (
			<div className="row-fluid">
				<div className="widget-content">            
					<form className="form-horizontal" ref="Form">
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="kode">Kode Produk</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text"
									id="kode"
									name="kode"
									value={data.kode}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="nama">Nama Produk</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text"
									id="nama"
									name="nama"
									value={data.nama}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="harga">Harga</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text"
									id="harga"
									name="harga"
									value={data.harga}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="berat">Berat</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text"
									id="berat"
									name="berat"
									value={data.berat}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="warna">Warna</label>
							<div className="col-md-10">
								<input 
									className="form-control" 
									type="text"
									id="warna"
									name="warna"
									value={data.warna}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="keterangan">keterangan</label>
							<div className="col-md-10">
								<textarea 
									className="form-control" 
									id="keterangan"
									name="keterangan"
									value={data.keterangan}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="brand">Brand</label>
							<div className="col-md-10">
								<select 
									className="form-control"
									id="brand"
									name="brand_id"
									value={data.brand_id}
									onChange={this.handleChange}
								>
								<option value="">Pilih </option>
								{
									brand.map((item, key) => {
										return (
											<option key={key} value={item.id}>{item.brand}</option>
										)
									})
								}
								</select>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-md-2" htmlFor="kategori">Kategori</label>
							<div className="col-md-10">
								<select 
									className="form-control"
									id="kategori"
									name="kategori_id"
									value={data.kategori_id}
									onChange={this.handleChange}
								>
								<option value="">Pilih </option>
								{
									kategori.map((item, key) => {
										return (
												<option key={key} value={item.id}>{item.kategori}</option>
											)
									})
								}
								</select>
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