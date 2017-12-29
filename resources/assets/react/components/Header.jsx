import React from 'react'
import {CariInput} from './FormCari'
import {NavLink, withRouter} from "react-router-dom"
import {Redirect} from "react-router"

export default class Header extends React.Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            search: '',
            results: [],
            fireRedirect: false
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    handleFormSubmit(event){
        event.preventDefault();
        this.setState({ fireRedirect: true })
        this.props.history.push('/search');
    }

    handleChangeInput(e){
        this.setState({ search: e.target.value });
    }

	render(){
        // const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state

		return (
			<header className="navbar navbar-fixed-top">
                <div className="header-nav">
                    <div className="container">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                          <ul className="nav navbar-nav">
                            <li><NavLink to="/about-us">About</NavLink></li>
                            <li><NavLink to="/contact-us">Contact</NavLink></li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div className="header-search">
                    <div className="container">
                        <div className="col-md-12 col-lg-12 col-xs-12 search-panel">
                            <form action="" className="form-search" onSubmit={this.handleFormSubmit}>
                                <div className="form-search-group">
                                    <i className="fa fa-search"></i>
                                    <div className="form-search-input">
                                        <CariInput
                                            value={this.state.search}
                                            controlFunc={this.handleChangeInput}
                                        />
                                    </div>
                                </div>
                            </form>
                            {
                                // fireRedirect && (
                                //         <Redirect to={from || '/search'} />
                                //     )

                            }
                        </div>
                    </div>
                </div>
            </header>
			)
	}
}