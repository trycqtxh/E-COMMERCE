import React from 'react'

export default class Footer extends React.Component{
	render(){
		return (
            <footer className="footer">
                <div className="container">
                    <ul className="nav navbar-nav footer-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
            </footer>
			)
	}
}