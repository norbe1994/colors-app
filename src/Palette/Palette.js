import React, { Component } from 'react'
import './Palette.css'
import ColorBox from '../ColorBox/ColorBox'

class Palette extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const colorBoxes = this.props.colors.map(color => (
			<ColorBox name={color.name} color={color.color} />
		))
		return (
			<div className='Palette'>
				{/* navbar */}
				<div className='Palette-colors'>{colorBoxes}</div>
				{/* footer*/}
			</div>
		)
	}
}

export default Palette
