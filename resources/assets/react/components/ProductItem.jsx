import React from 'react'
import {NavLink} from "react-router-dom";

export default class ProductItem extends React.Component{
	render(){
		return (
			<div className="col-sm-6 col-md-4 col-xs-12">
		        <div className="item-">
		            <div className="item--product">
		            	<NavLink to={'/produk/'+this.props.url}>
			            	<div className="item--product-image">
		                        <img src={this.props.gambar} className="img img-circle img-responsive" />
		                    </div>
		                    <div className="item--product-brand">
		                        <img src={this.props.brand} />
		                    </div>
		                    
		                    {(this.props.diskon) ? (
		                    		<div>
										<h2 style={{textDecoration:'line-through'}} className="item--product-title">{this.props.harga}</h2>
	    								<h6>Discont {this.props.diskon * 100}%</h6>
	    								<h2 className="item--product-title">{this.props.harga_baru}</h2>
    								</div>
		                    	): (
		                    		<div>
		                    			<h2 className="item--product-title">{this.props.harga}</h2>
		                    		</div>
		                    	)
		                    }
		                    
	                    	<h4 className="item--product-subtitle">{this.props.children}</h4>

                    	</NavLink>
		            	<div className="item--product-btn hidden-lg hidden-md">
		                    <div className="item--product-btn-pesan">
		                        <a href="sms:+19725551212?body=hello%20there" className="btn btn-default btn-block">
		                            <i className="fa fa-comments"></i>
		                        </a>    
		                    </div>
		                    <div className="item--product-btn-whatsapp">
		                        <a href="intent://send/+085223604451#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end" className="btn btn-default btn-block"><i className="fa fa-whatsapp"></i></a>
		                    </div>
		                </div>

		            </div>
		        </div>
		    </div>
			)
	}
}