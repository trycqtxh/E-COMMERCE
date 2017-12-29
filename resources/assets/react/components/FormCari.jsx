import React from 'react'

class CariRadio extends React.Component{
	constructor(props, context) {
		super(props, context);
	}

	render(){
		return (
			<label>
				<input 
					type="radio" 
					name="kategori"
					value={this.props.value}
					onChange={this.props.controlFunc}
				/> {this.props.kategori}
			</label>
			)
	}
}
class CariCheckBox extends React.Component{
	constructor(props, context) {
		super(props, context);
	}

	render(){
		if (!this.props.options) {
			return (<h5>Loading</h5>)
		}
		return (
			this.props.options.map((opt, index) => {
				return (
					<label key={opt.id}>
						<input 
							type="checkbox" 
							name="brand"
							value={opt.id}
							onChange={this.props.controlFunc}
							checked={this.props.selectedOptions.indexOf(opt.id)>-1}
						/> {opt.brand}
					</label>
					)
			})	
			)
	}
}

class CariInput extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			value: '',
		}

	}

	render(){
		return (
				<input 
					type="text"
					name="search"
					className="input-search" 
					value={this.props.value}
					onChange={this.props.controlFunc} 
					placeholder="Cari Disini ...!"
				/>
			)
	}
}
export {CariRadio, CariCheckBox, CariInput}