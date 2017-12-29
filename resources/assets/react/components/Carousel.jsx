import React from 'react'

class CarouselSlide extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
				<div className={
					this.props.index == this.props.activeIndex 
					? 'item detail-gallery active'
					: 'item detail-gallery'}>
    				<a href="">
    					<img src={this.props.slide.asli} alt={this.props.alt} />
    				</a>
    			</div>
			)
	}
}

class CarouselPager extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
				<div className={
					this.props.index == this.props.activeIndex 
					?'pager-item active'
					:'pager-item'}
					>
					<a className="pager-link" onClick={this.props.onClick}>
						<img src={this.props.slide.thumb} alt={this.props.alt} />
					</a>
				</div>
			)
	}
}

export default class Carousel extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			activeIndex: 0
		}
	}

	goToSlide(index) {
		this.setState({ activeIndex: index });
	}

	goToPrevSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex;
		let { slides } = this.props;
		let slidesLength = slides.length;

		if (index < 1) {
			index = slidesLength;
		}

		--index;

		this.setState({
			activeIndex: index
		});
	}

	goToNextSlide(e) {
		e.preventDefault();
		let index = this.state.activeIndex;
		let {slides} = this.props;
		let slidesLength = slides.length - 1;

		if (index === slidesLength) {
			index = -1;
		}

		++index;

		this.setState({
			activeIndex: index
		});
	}

	render(){
		return (
			<div id="gallery-product" className="gallery-product carousel slide" data-ride="carousel">
        		<div className="carousel-inner gallery-viewport" role="listbox">
        			{
        				this.props.slides.map((slide, index) => {
        					return (
        							<CarouselSlide 
        								key={index}
        								index={index}
										activeIndex={this.state.activeIndex}
										slide={slide}
        							/>
        						)
        				})
        			}
        		</div>
        		<div className="gallery-pager">
        			<div className="gallery-pager-direction">
        				<a 
        					onClick={e => this.goToPrevSlide(e)}
        					className="pager-prev" 
        					role="button" 
        					data-slide="prev"
        				>
        					<i className="fa fa-chevron-left"></i>
        				</a>
        				<a 
        					onClick={e => this.goToNextSlide(e)}
        					className="pager-next" 
        					role="button" 
        					data-slide="next"
        				>
        					<i className="fa fa-chevron-right"></i>
        				</a>
        			</div>

        			<div className="gallery-pager-item-list">
        				{
        					this.props.slides.map((slide, index) => {
	        					return (
	        							<CarouselPager 
	        								key={index}
	        								index={index}
											activeIndex={this.state.activeIndex}
											slide={slide}
											onClick={e => this.goToSlide(index)}
	        							/>
	        						)
	        				})
        				}
        			</div>
        		</div>
        	</div>
			)
	}
}