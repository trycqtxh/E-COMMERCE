import React from 'react'
import Breadcrumb from './Breadcrumb'
import LeftSide from './LeftSide'
import ProductItem from './ProductItem'
import Loading from './Loading'
import {NavLink} from "react-router-dom";
import axios from 'axios'

export default class Index extends React.Component{
	constructor(props, context) {
		super(props, context);

		this.state = {
			list: [],
			page: 1,
			kategori: '',
			brand: [],
			loading: false,
			pagination: {}
		};

		this.handleCariBerdasarkanKategori = this.handleCariBerdasarkanKategori.bind(this)
		this.handleCariBerdasarkanBrand = this.handleCariBerdasarkanBrand.bind(this)
		this.handleReadMore = this.handleReadMore.bind(this)
	}

	componentDidMount(){
		document.title = "Produk ";
		this.getData().then(res => {
			this.setState({list: res})
		})
	}

	buildURL(){
		let url = `/api/produk?page=${this.state.page}`
		if (this.state.kategori) {
			url += `&kategori=${this.state.kategori}`
		}
		if (this.state.brand.length > 0) {
			this.state.brand.map((val, key) => {
				url += `&brand[${key}]=${val}`
			})
		}
		return url;
	}

	getData(){
		return new Promise((resolve, reject) => {
			this.setState({loading: true})
			setTimeout(() => {
				this.setState({loading: false})
				axios.get(`${this.buildURL()}`)
					.then(res => {
						this.setState({pagination: res.data.meta.pagination})
						resolve(res.data.data)
					})
					.catch(e => {
						reject(e)
					})		
			}, 500)
			
		})
	}

	handleCariBerdasarkanKategori(kategori){
		this.setState({kategori: kategori})
		this.setState({page: 1})
		this.getData().then(res => {
			this.setState({list: res})
		})
	}

	handleCariBerdasarkanBrand(brand){
		this.setState({brand: brand})
		this.setState({page: 1})
		this.getData().then(res => {
			this.setState({list: res})
		})
	}

	handleReadMore(){
		let page = this.state.page;
		if (page !== this.state.pagination.total_pages) {
			this.setState({page: page+1})
			var data = this.state.list
			this.getData().then(res => {
				res.map(r => {
					data.push(r)
				})
				this.setState({list: data})
			})
		}
	}

	eachProduk(produk, i){
		return (
			<ProductItem 
				key={produk.id} 
				index={i} 
				gambar={produk.gambar.data.asli} 
				brand={produk.brand.data.thumb}
				harga={produk.harga}
				url={produk.url_produk}
			>
				{produk.produk}
			</ProductItem>
		);
	}

	render(){
		return (
			<div>
				<Breadcrumb>
                    <li className="active">Produk</li>
				</Breadcrumb>
		        <LeftSide 
		        	onCariBerdasarkanKategori={this.handleCariBerdasarkanKategori}
		        	onCariBerdasarkanBrand={this.handleCariBerdasarkanBrand}
		        />
		        <aside className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
		            <div className="row content-item">
		            	{
		            		this.state.list.map(this.eachProduk)
		            	}
		            	{
		            		(this.state.loading)
		            		?<Loading attrClass={(this.state.loading)? 'is-loading': 'not-loading'}/>
		            		: ''
		            	}
		            	{
		            		(this.state.page !== this.state.pagination.total_pages)
		            		? 
				            	<div className="col-md-12">
				            		<div style={{textAlign: 'center', marginBottom: 10}}>
				            			<a className="btn btn-default" onClick={this.handleReadMore}>Read More</a>
				            		</div>
				            	</div>
		            		:
		            		(this.state.list.length === 0)?
		            			<div className="col-md-12">
		            				<h3>Data Tidak Ditemukan</h3>
		            			</div>
		            		: ''
		            	}
		            	
		            </div>
		        </aside>
			</div>
			)
	}
}