import React, {Component} from 'react'
import axios from 'axios'
import {NavLink} from "react-router-dom";
import Carousel from './Carousel'
import Breadcrumb from './Breadcrumb'

export default class ProductDetail extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            model: {}
        };
    }

    componentDidMount(){

        var self = this
        axios.get(`api${self.props.location.pathname}`)
            .then(res => {
                document.title = "Produk-"+res.data.data.produk;
                self.setState({model: res.data.data})

            })
            .catch(e => {
                console.log(e)
            })
    }

	render(){
        if (!this.state.model.gallery) {
            return <h1>Loading</h1>;
        }
		return (
        	<div>
                <Breadcrumb>
                    <li><NavLink to={'/'}>Produk</NavLink></li>
                    <li className="active">{this.state.model.produk}</li>
                    
                </Breadcrumb>
                <aside className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row content-item">
                        <div className="col-md-4">
                        	<Carousel 
                                slides={this.state.model.gallery.data} 
                                alt={this.state.model.produk}
                            />
                        </div>
                        <div className="col-md-8">
                        	<div className="detail-product panel">
                        		<div className="panel-heading">
                        			<h4 className="title-heading">{this.state.model.produk}</h4>
                        		</div>
                        		<div className="panel-body">
                        			<dl>
                        				<dt>Kode Produk</dt>
                        				<dd>{this.state.model.url_produk}</dd>

                        				<dt>Berat</dt>
                        				<dd>{this.state.model.berat}</dd>
                        				
                        				<dt>Warna</dt>
                        				<dd>{this.state.model.warna}</dd>

                        				<dt>Garansi</dt>
                        				<dd>Produk 1</dd>
                        			</dl>
                        		</div>
                        		<div className="panel-footer">
                        			<p>Keterangan: {this.state.model.deskripsi}</p>
                        		</div>
                        	</div>
                        </div>
                    </div>
                </aside>  
            </div>
			)
	}
}