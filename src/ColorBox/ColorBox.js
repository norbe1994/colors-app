import React, { Component } from 'react'
import './ColorBox.css'

class ColorBox extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='ColorBox' style={{ background: this.props.color }}>
				<span>{this.props.name}</span>
				<span>MORE</span>
			</div>
		)
	}
}

export default ColorBox
