import React from 'react'
import seedPalettes from './seedPalettes'
// components
import Palette from './Palette/Palette'
import './App.css'
import { generatePalette } from './colorHelpers'

function App() {
	console.log(generatePalette(seedPalettes[0]))

	return (
		<div className='App'>
			<Palette {...seedPalettes[1]} />
		</div>
	)
}

export default App
