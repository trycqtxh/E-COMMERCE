import React from 'react'

export default class Loading extends React.Component{
	constructor(props, context){
		super(props)

		this.state = {
			isLoading: false,
			label: 'Loading...'
		}
	}

	render(){
		return (
			<div className={this.props.attrClass}>
				<div className="loader-wrapper">
	                <div className="pulled-left" >{this.state.label}</div>
	                <div className="wrapper">
	                    <div className="spinner-container">
	                        <div className="spinner-layer spinner-layer--blue">
	                            <div className="spinner-clipper spinner-clipper--left">
	                                <div className="spinner-circle"></div>
	                            </div>
	                            <div className="spinner--patch">
	                                <div className="spinner-circle"></div>
	                            </div>
	                            <div className="spinner-clipper spinner-clipper--right">
	                                <div className="spinner-circle"></div>
	                            </div>
	                        </div>

	                        <div className="spinner-layer spinner-layer--red">
	                            <div className="spinner-clipper spinner-clipper--left">
	                                <div className="spinner-circle"></div>
	                            </div>
	                            <div className="spinner--patch">
	                                <div className="spinner-circle"></div>
	                            </div>
	                            <div className="spinner-clipper spinner-clipper--right">
	                                <div className="spinner-circle"></div>
	                            </div>
	                        </div>

	                        <div className="spinner-layer spinner-layer--yellow">
	                            <div className="spinner-clipper spinner-clipper--left">
	                                <div className="spinner-circle"></div>
	                            </div>
	                            <div className="spinner--patch">
	                                <div className="spinner-circle"></div>
	                            </div>
	                            <div className="spinner-clipper spinner-clipper--right">
	                                <div className="spinner-circle"></div>
	                            </div>
	                        </div>

	                        <div className="spinner-layer spinner-layer--green">
	                            <div className="spinner-clipper spinner-clipper--left">
	                                <div className="spinner-circle"></div>
	                            </div>
	                            <div className="spinner--patch">
	                                <div className="spinner-circle"></div>
	                            </div>
	                            <div className="spinner-clipper spinner-clipper--right">
	                                <div className="spinner-circle"></div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
			</div>
			)
	}
}