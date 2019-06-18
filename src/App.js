import React from 'react'
import seedPalettes from './seedPalettes'
// components
import Palette from './Palette/Palette'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Palette {...seedPalettes[1]} />
		</div>
	)
}

export default App
