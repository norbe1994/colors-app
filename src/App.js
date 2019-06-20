import React from 'react'
import seedPalettes from './seedPalettes'
// components
import Palette from './Palette/Palette'
import './App.css'
import { generatePalette } from './colorHelpers'

function App() {
	return (
		<div className='App'>
			<Palette palette={generatePalette(seedPalettes[3])} />
		</div>
	)
}

export default App
