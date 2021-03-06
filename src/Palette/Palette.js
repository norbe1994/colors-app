import React, { Component } from 'react'
import ColorBox from '../ColorBox/ColorBox'
import Navbar from '../Navbar/Navbar'
import './Palette.css'

class Palette extends Component {
	constructor(props) {
		super(props)

		this.state = { level: 500 }
		this.changeLevel = this.changeLevel.bind(this)
	}

	changeLevel(level) {
		this.setState({ level })
	}

	render() {
		const { colors } = this.props.palette
		const { level } = this.state

		const colorBoxes = colors[level].map(color => (
			<ColorBox name={color.name} color={color.hex} />
		))

		return (
			<div className='Palette'>
				<Navbar level={level} changeLevel={this.changeLevel} />

				{/* navbar */}
				<div className='Palette-colors'>{colorBoxes}</div>
				{/* footer*/}
			</div>
		)
	}
}

export default Palette
