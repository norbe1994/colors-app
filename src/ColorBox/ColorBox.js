import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorBox extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { name, color } = this.props
		return (
			<CopyToClipboard text={color}>
				<div className='ColorBox' style={{ background: color }}>
					<div className='copy-container'>
						<div className='box-content'>
							<span>{name}</span>
						</div>
						<button className='copy-button'>Copy</button>
					</div>
					<span className='see-more'>More</span>
				</div>
			</CopyToClipboard>
		)
	}
}

export default ColorBox
