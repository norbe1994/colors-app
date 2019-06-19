import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorBox extends Component {
	constructor(props) {
		super(props)

		this.state = {
			copying: false,
		}

		this.changeCopyState = this.changeCopyState.bind(this)
	}

	changeCopyState() {
		this.setState({ copying: true }, () => {
			setTimeout(() => {
				this.setState({ copying: false })
			}, 1500)
		})
	}

	render() {
		const { name, color } = this.props
		const { copying } = this.state
		return (
			<CopyToClipboard text={color} onCopy={this.changeCopyState}>
				<div className='ColorBox' style={{ background: color }}>
					<div
						className={`copy-overlay ${copying && 'show'}`}
						style={{ background: color }}
					/>
					<div className={`copy-message ${copying && 'show'}`}>
						<h1>copied!</h1>
						<p>{color}</p>
					</div>
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
