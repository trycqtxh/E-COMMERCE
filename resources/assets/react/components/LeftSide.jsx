import React from 'react'
import axios from 'axios'
import {CariRadio, CariCheckBox} from './FormCari'

let kategori = function () {
	return new Promise((resolve, reject) => {
		axios.get('/api/kategori')
			.then(res => {
				resolve(res.data.data)
			})
			.catch(e => {
				reject(e)
			})
	})
}

var brand = function () {
	
}

export default class LeftSide extends React.Component{
	constructor(props, context) {
		super(props, context);

		this.state = {
			kategori: null,
			brand: null,
			valueKategori: '',
			valueBrand: [],
		};

		this.handleChangeKategori = this.handleChangeKategori.bind(this)
		this.handleChangeBrand = this.handleChangeBrand.bind(this)
	}

	componentDidMount(){
		var self = this
		axios.all([self.getBrand(), self.getKategori()])
			.then(axios.spread(function (brand, kategori){
				self.setState({kategori: kategori})
				self.setState({brand: brand})
			}))
	}

	getBrand(){
		return new Promise((resolve, reject) => {
			axios.get('/api/brand')
				.then(res => {
					resolve(res.data.data)
				})
				.catch(e => {
					reject(e)
				})
		})
	}

	getKategori(){
		return new Promise((resolve, reject) => {
			axios.get('/api/kategori')
				.then(res => {
					resolve(res.data.data)
				})
				.catch(e => {
					reject(e)
				})
		})
	}

	handleChangeKategori(event){
		this.setState({valueKategori: event.target.value})
		this.props.onCariBerdasarkanKategori(event.target.value)
	}

	handleChangeBrand(event){
		const newSelection = event.target.value;
		let newSelectionArray;

		if(this.state.valueBrand.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.valueBrand.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.valueBrand, newSelection];
		}
		this.props.onCariBerdasarkanBrand(newSelectionArray)
		this.setState({ valueBrand: newSelectionArray });

	}

	render(){
		if(!this.state.kategori){
			return <p>Loading</p>
		}
		if(!this.state.brand){
			return <p>Loading</p>
		}
		return (
			<aside className="col-sm-4 col-md-3 col-lg-3 hidden-xs">
		        <div className="navigation-left">
		            <form role="form">
		                <h3 className="nav-title">Cari lebih detail</h3>
		                <h3 className="nav-sub-title">
		                    <i className="fa fa-gg"></i> Kategori
		                </h3>
		                <div className="nav-item">
		                    {
		                    	this.state.kategori.map((kat, index) => {
		                    		return (
		                    			<CariRadio 
		                    				key={index} 
		                    				kategori={kat.kategori}
		                    				value={kat.id}
		                    				controlFunc={this.handleChangeKategori}
		                    				/>
		                    			)
		                    	})
		                    }
		                </div>
		                <h3 className="nav-sub-title">
		                    <i className="fa fa-gg"></i> Brand
		                </h3>
		                <div className="nav-item">
		                    <CariCheckBox
		                    	controlFunc={this.handleChangeBrand}
		                    	options={this.state.brand}
          						selectedOptions={this.state.valueBrand}
		                    />
		                </div>
		            </form>
		        </div>
		    </aside>
			)
	}
}